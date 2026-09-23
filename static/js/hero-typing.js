console.log("NEW HERO SCRIPT");

document.addEventListener("DOMContentLoaded", function () {

    const textElement = document.getElementById("typing-text");

    if (!textElement) return;


    const lines = [
        "Driven by Curiosity,",
        "Guided by Science,",
        "Inspired by Discovery..."
    ];


    let delay = 0;


    lines.forEach((line, lineIndex) => {

        const lineDiv = document.createElement("div");


        [...line].forEach((char) => {

            const span = document.createElement("span");

            span.textContent = char === " " ? "\u00A0" : char;

            span.className = "smooth-char";

            span.style.animationDelay = `${delay}s`;

            lineDiv.appendChild(span);


            delay += 0.090;

        });


        textElement.appendChild(lineDiv);


        delay += 0.8;

    });


});