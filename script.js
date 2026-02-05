function generateRandomNumber() {
    const random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = random;
}

function addItem() {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");
    li.textContent = "Item " + (ul.children.length + 1);
    ul.appendChild(li);
}

function removeItem() {
    const ul = document.getElementById("itemList");
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
}