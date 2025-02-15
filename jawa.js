// Efek Ketik Romantis
const text = "I Love You❤️";
let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("romanticText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150);
    }
}
typeText();

// Efek Hati Berjatuhan
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);
