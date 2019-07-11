const button = document.querySelector('.button');
const header = document.querySelector('header');
const section = document.querySelector('section');

const bgColor = (color) => {
    header.style.backgroundColor = color;
}

const textColor = (color) => {
    header.style.color = color;
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

function fetchPage(name) {
    fetch(name).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('article').innerHTML = text;
        })
    })
}

fetch(name).then(function (response) {
    response.text().then(function (text) {
        document = text;
    })
});

//Asynchronous
fetch('html').then(function(response){
    if(response.status == '404'){
      alert('Not found');
    }
  });