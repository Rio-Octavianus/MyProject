document.addEventListener("DOMContentLoaded", function () {
    // Efek Ketik Teks
    const text = "Will you be my Valentine? ❤️";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("romanticText").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
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


});
