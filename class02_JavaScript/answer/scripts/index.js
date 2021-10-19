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
  if (count > 0) {
    count -= 1;
  }
  text.innerText = `Like: ${count.toString()}(Too much hatred!!!)`;
};

btnReset.onclick = () => {
  count = 0;
  text.innerText = `Like: ${count.toString()}`;
};
