// TASK 1 ----------------------------------------

let clock = document.getElementById("lr7_clock");


function updateClock() {
    let date = new Date().toLocaleString("ru", { day: 'numeric', month: 'long', year: "numeric" }).replace("г.", "года");
    let time = new Date();
    let lastDigit = 0;

    let hour = time.getHours();
    if (hour == 1 || hour == 21) hour += " час";
    else if ((hour > 1 && hour < 5) || hour > 21) hour += " часа";
    else hour += " часов";

    let minute = time.getMinutes();
    lastDigit = minute % 10;
    if (lastDigit == 1) minute += " минута";
    else if (lastDigit > 1 && lastDigit < 5) minute += " минуты";
    else minute += " минут";

    let second = time.getSeconds();
    lastDigit = second % 10;
    if (lastDigit == 1) second += " секунда";
    else if (lastDigit > 1 && lastDigit < 5) second += " секунды";
    else second += " секунд";


    clock.innerText = `
    Сегодня: ${date}
    Сейчас: ${hour} ${minute} ${second}
    `;
}

updateClock();
setInterval(updateClock, 1000);

// TASK 2 ----------------------------------------

let lr7_image_container = document.getElementById("lr7_image_container");
let interval_input = document.getElementById("lr7_interval_input");
let interval_label = document.getElementById("lr7_interval_label");
let interval_button = document.getElementById("lr7_interval_button");
let startIndex = 2;
let interval = 1000;
interval_input.value = interval;

function updateImages() {

    if (startIndex == 2) startIndex--;
    else startIndex++;

    lr7_image_container.innerHTML = "";

    for (let i = startIndex; i <= 8; i += 2) {
        let img = document.createElement("img");
        img.style = `
        content:url("../photoOut/image${i}.jpg");
        width: 40%;
        transition:opacity 0.5s linear;
        `;
        lr7_image_container.appendChild(img);
    }
}
updateImages();

let imageUpdater = setInterval(updateImages, interval);

interval_button.onclick = () => {

    let error = /[^0-9.]/g.test(interval_input.value);
    if (!error) {
        interval_label.innerText = "Интервал смены изображений (мс):";
        interval_label.classList.remove("errorField");
        interval = Number(interval_input.value);
        clearInterval(imageUpdater);
        imageUpdater = setInterval(updateImages, interval);
        return;
    }
    interval_label.innerText = "значение не является числом";
    interval_label.classList.add("errorField");
}

