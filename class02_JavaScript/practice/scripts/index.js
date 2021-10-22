const btnLike = document.getElementById("btn_like");
// Todo:
// Find and declare the button elements (hate/reset) to add onclick function.

const text = document.getElementById("text");

let count = 0;

btnLike.onclick = () => {
  count += 1;
  text.innerText = `Like: ${count.toString()}`;
};

// Todo:
// Define the onclick function for each button (hate/reset)
