const btnLike = document.getElementById("btn-like");
const btnHate = document.getElementById("btn-hate");
const btnReset = document.getElementById("btn-reset");
// Todo:
// Find and declare the button elements (hate/reset) to add onclick function.

const text = document.getElementById("text");

let count = 0;

function LikeHandler() {
  count += 1;
  //text.innerText = `Like: ${count.toString()}`;
  text.innerText = "Like: " + count.toString();
}
function HateHandler() {
  count -= 1;
  text.innerText = "Like: " + count.toString();
  if (count < 0)
    text.innerText = "Like: " + count.toString() + " \\Too much hatred!!";
}
function ResetHandler() {
  count = 0;
  text.innerText = "Like: " + count.toString();
  alert("Be careful to be nice!!");
}

btnLike.onclick = LikeHandler;
btnHate.onclick = HateHandler;
btnReset.onclick = ResetHandler;

// Todo:
// Define the onclick function for each button (hate/reset)
