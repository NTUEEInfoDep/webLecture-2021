const btnLike = document.getElementById("btn-like");
// Todo:
// Find and declare the button elements (hate/reset) to add onclick function.
const btnHate = document.getElementById("btn-hate");
const btnReset = document.getElementById("btn-reset");

const text = document.getElementById("text");

let count = 0;

function btnHandler() {
    count += 1;
    // text.innerText = `Like: ${count.toString()}`;
    text.innerText = "Like: " + count.toString();
    console.log(count);
}

function hateHandler() {
    count = count - 1;
    text.innerText = "Like: " + count.toString();
}

function resetHandler() {
    count = 0;
    text.innerText = "Like: " + count.toString();
}

btnLike.onclick = btnHandler;
// Todo:
// Define the onclick function for each button (hate/reset)
btnHate.onclick = hateHandler;
btnReset.onclick = resetHandler;
