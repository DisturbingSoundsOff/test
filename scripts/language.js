let dropList = document.getElementById("dropList")

function listLanguages() {
    dropList.classList.toggle("show")
}

window.onclick = (event) => {
    if (
        !event.target.matches('.dropBtn') &&
        dropList.classList.contains("show")
    ) {
        dropList.classList.toggle("show")
    }
}
