document.addEventListener("DOMContentLoaded", function () {

    const textElement = document.getElementById("typing-text");

    if (!textElement) {
        console.log("typing-text not found");
        return;
    }

    const text = "Driven by Curiosity... Guided by Science... Inspired by Discovery...";
    
    let index = 0;

    function typeText() {

        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;

            setTimeout(typeText, 80);
        }

    }

    typeText();

});