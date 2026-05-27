const text = "Exploring Machine Learning • Computer Vision • AI for Science";

let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;