let forbiddenWords = ["плохой", "ужасный", "отстойный", "кошмарный", "стрёмный"];
let changeTo = ["хороший", "отличный", "крутой", "чудесный", "прекрасный"];

let commentSection = document.getElementById("comment_section");
let inputField = document.getElementById("comment_textarea");
let sendButton = document.getElementById("comment_button");
let inputLabel = document.getElementById("comment_textarea_label");

sendButton.onclick = () => {

    let input = inputField.value;
    let badWordCount = 0;

    for (let word of input.split(" ")) {
        if (forbiddenWords.includes(word)) badWordCount++;
    };

    if (badWordCount > 2) {
        inputLabel.innerText = "слишком много запрещённых слов";
        inputLabel.classList.add("errorField");
        return;
    }

    inputLabel.innerText = "Комментарий:";
    inputLabel.classList.remove("errorField");

    for (let i = 0; i < forbiddenWords.length; i++) {
        input = input.replace(forbiddenWords[i], changeTo[i]);
    }

    input = input.replace(/(((https?:\/\/)|(www\.))[^\s]+)/gi, "");


    let commentHolder = document.createElement("div");
    let comment = document.createElement("span");
    comment.classList.add("comment");
    comment.innerText = input;
    commentHolder.appendChild(comment);
    commentSection.appendChild(commentHolder);

}

