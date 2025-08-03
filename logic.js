function showMessage() {
  const message = document.getElementById("message");
  message.style.display = "block";
}

// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.querySelector(".heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
