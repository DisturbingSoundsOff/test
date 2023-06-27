let nums = document.getElementsByName("numOnly");
let fields = document.getElementsByName("checkfield");
let amounts = document.getElementsByName("numOnlyAmount");
let errorFields = document.getElementsByClassName("errorField");
let sumButton = document.getElementById("taskOneSumButton");
let rezField = document.getElementById("rez1");

nums.forEach(field => field.value = "");
rezField.value = "";

// nums.forEach(input =>
//     input.addEventListener("input", () => {
//         input.value = input.value.replace(/[^0-9.]/g, '');
//     })
// );


for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("input", () => {
        let error = /[^0-9.]/g.test(fields[i].value);
        if (error) {
            errorFields[i].textContent = "Недопустимый ввод!"
        } else {
            errorFields[i].textContent = ""
        }
    })
}


sumButton.onclick = () => {
    let inums = Array.from(nums).map(el => Number(el.value));
    let iamounts = Array.from(amounts).map(el => Number(el.value));

    let newValue = 0;
    for (let i = 0; i < inums.length; i++) {
        newValue += inums[i] * iamounts[i];
    }
    if (isNaN(newValue)) {
        rezField.classList.add("errorField");
        rezField.value = "Недопустимый ввод!";
    } else {
        rezField.classList.remove("errorField");
        rezField.value = newValue;
    }
}


// TASK 2

let computeButton = document.getElementById("taskTwoComputeButton");
let input = document.getElementById("taskTwoTextAreaInput");
let output = document.getElementById("taskTwoTextAreaOutput");
let label = document.getElementById("taskTwoInputLabel");

computeButton.onclick = () => {
    // var textToParse = `Теги не фильтруются <a href="htpp://sut.ru">Hacked by Vasya!)</a> сайт уязвим для атак XSS`;
    var textToParse = input.value;
    var div = document.createElement("div");
    div.innerHTML = textToParse;
    if (textToParse != div.innerText) {
        label.innerText = "Введены html тэги!";
        label.classList.add("errorField");
    } else {
        label.innerText = "Ввод:";
        label.classList.remove("errorField");

    }

    output.innerHTML = div.innerText;
}
