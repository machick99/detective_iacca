(async () => {
  // — RIDDLES — SHA-256 hashes + Base64 clues + optional soundChance flags
  const riddles = [
    {
      hash: "9e78b43ea00edcac8299e0cc8df7f6f913078171335f733a21d5d911b6999132",
      clue: "TG9vayBiZWhpbmQgdGhlIHBhaW50aW5nLg==",
      soundChance: 0.7, // answer: "moon"
    },
    {
      hash: "73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049",
      clue: "Q2hlY2sgdGhlIGRyYXdldiB1bmRlciB0aGUgc2luay4=",
      soundChance: 0.7, // answer: "42"
    },
    {
      hash: "092c79e8f80e559e404bcf660c48f3522b67aba9ff1484b0367e1a4ddef7431d",
      clue: "WW91ciBuZXh0IGhpbHQgaXMgaW5zaWRlIHRoZSBwaWFubyBiZW5jaC4=",
      soundChance: 0.7, // answer: "echo"
    }
  ];

  // — STATE —
  let currentIndex = parseInt(localStorage.getItem("riddleIndex")) || 0;
  const input = document.getElementById("answer-box");
  const resetBtn = document.getElementById("reset-btn");
  const messageArea = document.getElementById("message-area");

  // — UTILS —
  async function sha256(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }
  function decodeClue(b64) {
    return atob(b64);
  }

  // — ANNOYING FEATURES —
  const sounds = [
      "sounds/chiri.mp3",
    "sounds/boing.mp3",
    "sounds/falling.mp3",
    "sounds/rick.mp3"];
  function playRandomSound() {
  // Debug: log out available sounds and chosen index
  //console.log('Available sounds:', sounds);
  const idx = Math.floor(Math.random() * sounds.length);
  //console.log('Playing sound index:', idx, sounds[idx]);
  new Audio(sounds[idx]).play().catch(console.warn);
}

  function jitterInput() {
    const parentRect = input.parentElement.getBoundingClientRect();
    const maxX = parentRect.width - input.offsetWidth;
    const maxY = parentRect.height - input.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    input.style.position = "absolute";
    input.style.left = `${x}px`;
    input.style.top = `${y}px`;
  }

  // — EVENT: Submit Answer —
  input.addEventListener("keydown", async e => {
    if (e.key !== "Enter") return;
    const ans = input.value.trim().toLowerCase();
    const hash = await sha256(ans);
    const isCorrect = riddles[currentIndex] && hash === riddles[currentIndex].hash;

    // play sound randomly
    const { soundChance = 0.5 } = riddles[currentIndex] || {};
    if (Math.random() < soundChance) playRandomSound();

    if (isCorrect) {
      // show current clue
      messageArea.textContent = decodeClue(riddles[currentIndex].clue);
      currentIndex++;
      localStorage.setItem("riddleIndex", currentIndex);
      input.value = "";

      if (currentIndex >= riddles.length) {
        // completed all riddles
        messageArea.textContent = " You've completed all riddles!";
        input.disabled = true;
      }
    } else {
      messageArea.textContent = "Try Again!";
      input.value = "";
    }
  });

  // — EVENT: Click jitter —
  input.addEventListener("click", () => {
    if (Math.random() < 0.6) jitterInput();
  });

  // — EVENT: Reset —
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("riddleIndex");
    location.reload();
  });

  // — INITIAL LOAD —
  if (currentIndex > 0) {
    messageArea.textContent = decodeClue(riddles[currentIndex - 1].clue);
    if (currentIndex >= riddles.length) input.disabled = true;
  }
})();