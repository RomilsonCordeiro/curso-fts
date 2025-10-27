/*let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let res = n1 + n2;
  document.querySelector("#resultado").textContent = res;
  console.log(res);
}); */

function somar() {
  let n1 = parseFloat(document.querySelector("#num1").value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  let res = n1 + n2;
  document.querySelector("#resultado").textContent = res;
  console.log(res);
}
