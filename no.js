document.addEventListener("DOMContentLoaded", function () {
    // Efek Ketik Teks
    const text = "Pwiss , be my Valentine? ❤️";
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

    // Tombol "No" Menghindar dengan Smooth Animation
    function moveRandomEl(elm) {
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }
 
    const moveRandom = document.querySelector("#move-random");
    
    moveRandom.addEventListener("click", function (e) {
        moveRandomEl(e.target);
    });
});
