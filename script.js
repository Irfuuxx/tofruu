console.log("Script Loaded!");

const title = document.getElementById("title");
const envelope = document.querySelector(".envelope");
const music = document.getElementById("bgMusic");
const letter = document.querySelector(".love-letter-body");

const fullLetter = letter.innerHTML;

letter.innerHTML = "";

envelope.addEventListener("click", function () {

    console.log("Envelope clicked!");

    envelope.classList.add("hide");

    popHearts();

    title.classList.add("fade-out");

    setTimeout(function () {

        envelope.style.display = "none";

        title.innerHTML = "Dear Afrah, My Beautiful Wife 💗";

        title.classList.remove("fade-out");
        title.classList.add("fade-in");

        document.querySelector(".welcome-screen").classList.add("move-top");

        letter.classList.add("show");

    typeWriter();

        music.play();

        setInterval(createPetal, 250);

    }, 1200);

});
function popHearts(){

    for(let i = 0; i < 60; i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        const hearts = ["💖","💕","💗","💞"];

        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.setProperty("--duration", (2 + Math.random() * 2) + "s");

        const rect = envelope.getBoundingClientRect();

        heart.style.left = rect.left + rect.width/2 + "px";
        heart.style.top = rect.top + rect.height/2 + "px";
        const x = (Math.random() - 0.5) * 900;
        const y = -(Math.random() * 800 + 200);

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },2500);

    }

}
function createPetal(){
    
    console.log("Petal created");

    const petal = document.createElement("div");

    petal.className = "petal";

    const petals = [
    "🌸","🌸","🌸",
    "🌺","🌸","🌸","🌸"
];

    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    petal.style.fontSize = (14 + Math.random() * 24) + "px";

    petal.style.setProperty("--duration", (6 + Math.random() * 6) + "s");

    petal.style.opacity = 0.6 + Math.random() * 0.4;

    document.body.appendChild(petal);

    setTimeout(function(){

        petal.remove();

    },10000);

}
function typeWriter() {

    let i = 0;
    const speed = 16;

    function typing() {

        if (i < fullLetter.length) {

            letter.innerHTML += fullLetter.slice(i, i + 4);
            i += 4;

            setTimeout(typing, speed);

        } else {

            const footer = document.querySelector("footer");

            footer.style.display = "block";

            setTimeout(function () {
                footer.style.opacity = "1";
            }, 50);

        }

    }

    typing();

}

    requestAnimationFrame(typing);
}
