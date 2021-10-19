const btnLike = document.getElementById("btn-like");
const btnHate = document.getElementById("btn-hate");
const btnReset = document.getElementById("btn-reset");
const text = document.getElementById("text");

let count = 0;

btnLike.onclick = () => {
  count += 1;
  text.innerText = `Like: ${count.toString()}`;
};

btnHate.onclick = () => {
  count -= 1;
  if (count < 0) {
    text.innerText = `Like: ${count.toString()}. Too much hatred!`;
  } else {
    text.innerText = `Like: ${count.toString()}`;
  }
};

btnReset.onclick = () => {
  count = 0;
  text.innerText = `Like: ${count.toString()}`;
  window.alert("Love and piece!!!");
};
