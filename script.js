(async () => {
  // — RIDDLES — SHA-256 hashes + Base64 clues + optional soundChance flags
  const riddles = [
    {
      hash: "9b78184b34e187604cdd71ba3a2b4619531345c84bf25d5fb4e3b3fe9d0132ed", //
      clue: "R2Fsb3BwbyBsaWV2ZSB2ZW50byBsaWJlcm8gZSBjcmluZS4gRmllcm8gcmVzcGlyby4=", //
      soundChance: 0.7, // answer: "moon"
    },
    {
      hash: "8e86a6c567ed93bffe2afd2a4f9f8a101b99656272a5cc296f9873e17bf8eddb", //
      clue: "T2NjaGkgZnVydGl2aS5UcmEgY2VzdGluaSByb3Zpc3RhLiBTdHJpc2NlIHN1bCBtdXNv",
      soundChance: 0.7, // answer: "42"
    },
    {
      hash: "799c7c9316f8ac229657f7251aa364a803089be5d123e91204287fe0f7e4bc44", //
      clue: "R2lvaWEgbmVsbCdhY3F1YSwgZ2lvY28gYWdpbGUgZSBkb2xjZSBwZWxvIGx1Y2VudGU=",
      soundChance: 0.7, // answer: "echo"
    },

    {
      hash: "47f14c43fdd3c3f4aeacad81a527a197bfe556828623ed8d57a7bd5bb50556c4", //
      clue: "QmFsemkgbmVsIHNvbGUsIG1hcnN1cGlvIGNoZSBwcm90ZWdnZS4gVGVycmEgcm9zc2EgZSBzYWx0aS4=", //
      soundChance: 0.7, // answer: "echo"
    },
    {
      hash: "a57ec9307e09fd6c97cddf5c638e90a98e7e8043d887855abd877fe1baa37eec", //
      clue: "U29ubm8gZCdpbnZlcm5vLCBvbWJyYSBjYWxtYSBlIHBvc3NlbnRlLiBQYXNzaSBzaWxlbnRp", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "70b31a24a37b185b230aba61b8941200a451bfd8c5563de8980e48fcf3f5257a", //
      clue: "U2FsdGVsbGkgZSBzY2hlcnppLCBtYW5pIHJhcGlkZSBpbiBhbHRvLiBBc3R1emlhIG5lZ2xpIG9jY2hpLg==", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "27a529202d7812ef440df7c9f946a5dd6bf611fffc0612760a157716d4761cec", //
      clue: "Q3JpbmllcmEgZG9yYXRhLCBydWdnaXRvIG5lbGxhIHNhdmFuYS4gVHJhbW9udG8gZmllcm8u",
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "66714d1cd3b4d949269309021066ce2c1c8c8f4b6e1ffc9e8dcfe6901f468d0e", //
      clue: "QWxpIGNoZSBzYmF0dG9ubywgcGl1bWUgbGVnZ2VyZSBpbiB2b2xvLkJyZXZlIHBsYW5hdGEu", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "b0d2e14b55bd876698d96110772bcfb44ecc3b9204cd7b15a588db6679a729ea", //
      clue: "UGFzc2kgc2lsZW56aW9zaSwgb2NjaGkgdmVyZGkgbmVsbCBvbWJyYS4gQ2FyZXp6ZSBhbCBzb2xlLg==", //
      soundChance: 0.7, // answer: "echo"
    },
    {
      hash: "2091b8a68c91006d7424e28b11f3bd9ece613a347401972d564a9f75b8af30c1", //
      clue: "Q29kYSBpbiBmZXN0YSwgZmVkZWx0YSBuZWxsbyBzZ3VhcmRvLiBBbWljbyBldGVybm8u", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "46608269422603c8d4c67b623d71a3b6cd3fa1d61d971f7d7477ae7bdc0c0d16", //
      clue: "UGljY29sbyBlIHN2ZWx0bywgc3F1aXR0aWkgdHJhIGxlIGZlc3N1cmUuIE9tYnJhIGZ1Z2dlbnRlLg==", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "353bd441d27062d51318ec17ac5b02ddf38bccfe0a797a4680ce74e821a3c201", //
      clue: "U3RhZ25vIG5lbGxhIG5vdHRlLCBzYWx0aSBicmV2aSBzdWxsIGFjcXVhLiBDYW50byBkaSBwaW9nZ2lhLg==", //
      soundChance: 0.7,
    },
      {
      hash: "4f8202222351f53eef7670ded23f224f510ae00fd2ca9c24cc97920af0df81a1", //
      clue: "TXVyYSBkaSBwaWV0cmEsIGltbW9iaWxlIG5lbCBzb2xlLiBTY2F0dG8gaW1wcm92dmlzby4=", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "8d78d5506606b3e1b75184f4192a8f55168e1dba45402b76c1a29d695fb99a13", //
      clue: "UGFzc2kgc3VsbCBhY3F1YSwgemFtcGUgcGlhdHRlIG5lbCBsYWdvLiBUdWZmbyBsZWdnZXJvLg==", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "59410a0d94a7bb31c5c8317439bea07265e73e9df61641d76597eb2deefef0b4", //
      clue: "UXVpZXRvIG5lbCBmaXVtZSxlcmJhIGZyZXNjYSBpbiBib2NjYS4gUGFjZSBpbmZpbml0YS4=", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "0e63fc8f9ae9c306c11521ce087ccfcb695a112ccbde35ea8ae8ade1aa4f0416", //
      clue: "UGl1bWUgY29sb3JhdGUsIHZvY2kgYWx0ZSBuZWwgY2llbG8uRWNvIHZpdmFjZS4=", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "f386e36d38295dbc3395b70313604bfe2e001efb78b8c36bd16122f8bbfd39e3", //
      clue: "QWxpIG1hZXN0b3NlLCBzZ3VhcmRvIGFjdXRvIGUgbG9udGFuby4gVmVudG8gcG90ZW50ZS4=", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "19482583a217d971e2e14c2db971166b47a4f20fffd01d1df236b1c358a0fbf8", //
      clue: "UGlubmUgdGFnbGllbnRpLCBvbWJyYSBzY3VyYSBuZWwgbWFyZS4gUGF1cmEgYW50aWNhLg==", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "d06587e0ca6636d69d8ee3ab5118b76b91bc6edd00558af084c435a1ee5a5f12", //
      clue: "QWJicmFjY2lvIGxlbnRvLCBmb2dsaWUgZG9sY2kgZCBldWNhbGlwdG8uIFNvZ25pIG5lbCByYW1vLg==", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "d111175f6aab23835ce3cfc7f045a69f684a17a532b063418b1144c30f6b1d50", //
      clue: "UGFzc2kgdmVsb2NpLCBjb2xsbyBsdW5nbyBuZWwgc29sZS4gU2d1YXJkbyBjdXJpb3NvLg==", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "f7d13c1b79b98c6a3019b34ddc5b2f2fdebf08761f0d70474dbaac8db7689ef5", //
      clue: "WmFtcGUgc290dGlsaSwgcm9zYSBkYW56YSBuZWxsJ2FjcXVhLiBTcGVjY2hpbyBkZWwgY2llbG8u", //
      soundChance: 0.7, // answer: "echo"
    },
      {
      hash: "9a2eb0e1f112a823e76c63c425de9931ab25c79dce856d15cce2236f0f880aed", //
      clue: "R3VhcmRhbWkgb2x0cmUgYWwgY29uZmluZSwgcmlhcHJvIGdsaSBvY2NoaSBhbCBwcmltbyBkaSBkaWVjaS4=", //
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
    "sounds/rick.mp3",
    "sounds/ah.wav",
    "sounds/CD.ogg",
    "sounds/PD.ogg",
    "sounds/sg.ogg",
    "sounds/tossico.ogg",
    "sounds/weu"];
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
        messageArea.textContent = "Riapro gli occhi al primo di dieci. All'alba, guarda dall'ovest";
        input.disabled = true;
      }
    } else {
      messageArea.textContent = "Riprova!";
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