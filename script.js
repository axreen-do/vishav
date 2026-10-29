const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const message = `Every love story is beautiful,
but ours is my favourite.

You are my happiness, my safe place,
and the person I want beside me forever.

You make me the happiest person on earth,
I feel like my best self with you.

I love you, always. ❤️`;

envelope.addEventListener("click", () => {
  envelope.style.display = "none";

  document.querySelector(".instruction").style.display = "none";

  letter.classList.remove("hidden");

  let index = 0;

  function typeMessage() {
    if (index < message.length) {
      letterText.textContent += message[index];
      index++;
      setTimeout(typeMessage, 40);
    }
  }

  letterText.style.whiteSpace = "pre-line";
  typeMessage();
});
