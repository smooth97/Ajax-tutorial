const button = document.querySelector('.button');
const header = document.querySelector('header');
const section = document.querySelector('section');

const bgColor = (color) => {
    header.style.backgroundColor = color;
    section.style.backgroundColor = color;
}

const textColor = (color) => {
    header.style.color = color;
    section.style.color = color;
}

function changeColor() {
    if (button.value === "night") {
        button.value = "day";
        bgColor("#303030");
        textColor("white");
    } else if (button.value === "day") {
        bgColor("white");
        button.value = "night";
        textColor("#303030");
    }
}

button.addEventListener('click', changeColor);

