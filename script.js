//1
const h1 = document.querySelector("h1");
h1.innerText = 'Задание 2.8 - 1';
function number() {
const all = document.querySelectorAll("li");
for (let i = 0; i < all.length; i++){
    all[i].textContent = i + 1;
}
}

//2
const img = document.querySelector("img");
img.setAttribute('src', 'https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled');
img.setAttribute('alt', 'photo');
const link = document.querySelector("a");
link.setAttribute('href', 'https://www.google.ru/?hl=ru');
link.innerHTML = '<a>Google</a>'

//3
const newLi = document.createElement("li");
newLi.textContent = "Новый элемент";
const list = document.querySelector("ul");
const add = document.getElementById("add");
add.addEventListener("click", () => {
    list.appendChild(newLi)
});
const deleteLi = document.getElementById("delete");
deleteLi.addEventListener("click", () => {
    list.removeChild(newLi)
});

//4
const text = document.getElementById("text");
text.style.color = "red";
text.style.fontFamily = "Arial";
const but = document.getElementById("changeColor");
but.addEventListener("click", () => {
    text.style.color = "green";
});
function btn() {
let text = document.getElementById("text");
let style = getComputedStyle(text);
if (style.display === 'none') {
    document.getElementById("text").style.display = 'block';
} else if (style.display !== 'none') {
    document.getElementById("text").style.display = 'none';
}
}

//5
const div = document.getElementById("div");
console.log(div.getBoundingClientRect());
const button = document.getElementById("coordinates");
button.addEventListener("click", () => {
    console.log(div.getBoundingClientRect())
});

//
function form() {
const input = document.querySelectorAll("input");
for (let i = 0; i < input.length-1; i++) {
    if(input[i].value) {
        const OK = document.createElement("p");
        OK.textContent = "Отправлено";
    } else {
        const error = document.createElement("p");
        error.textContent = "Ошибка";
    }
}
}