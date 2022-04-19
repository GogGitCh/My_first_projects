const button = document.getElementById("btn");

const hexHTML = document.getElementById("hex-value");
const bgChanger = document.getElementsByClassName("container");

document.body.style.backgroundColor = "Black";

button.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = color;
  hexHTML.innerText = color;
  console.log(color);
});
