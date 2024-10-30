let inputTag = document .querySelector("#userInput")
let bodyElement = document .querySelector(".body")

console.log(bodyElement);

function AddToDo(){
    console.log(inputTag.value)

    let createDiv = document.createElement("div")
    createDiv.className = "list"
    createDiv.innerHTML = inputTag.value
    bodyElement.appendChild(createDiv)


    inputTag.value=""
}