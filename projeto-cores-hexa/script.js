let colorByName = [
  "Green",
  "Red",
  "Yellow",
  "Blue",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
];

let colorByHexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

let nomeButton = document.querySelector("#btnColorByName");
nomeButton.addEventListener("click", () => {
  let btnChangeColorByName = document.querySelector("#btnChangeColor");
  btnChangeColorByName.addEventListener("click", () => {
    let color = colorByName[Math.floor(Math.random() * 8)];
    document.querySelector("main").style.backgroundColor = color;
    document.querySelector("#colorText").textContent = color;
  });
});

let hexaButton = document.querySelector("#btnColorByHexa");
hexaButton.addEventListener("click", () => {
  let btnChangeColorByHexa = document.querySelector("#btnChangeColor");
  btnChangeColorByHexa.addEventListener("click", () => {
    let redNumberOne = colorByHexa[Math.floor(Math.random() * 16)];
    let redNumberTwo = colorByHexa[Math.floor(Math.random() * 16)];

    let greenNumberOne = colorByHexa[Math.floor(Math.random() * 16)];
    let greenNumberTwo = colorByHexa[Math.floor(Math.random() * 16)];

    let blueNumberOne = colorByHexa[Math.floor(Math.random() * 16)];
    let blueNumberTwo = colorByHexa[Math.floor(Math.random() * 16)];

    let hexaRed = redNumberOne + redNumberTwo;
    let hexaGreen = greenNumberOne + greenNumberTwo;
    let hexaBlue = blueNumberOne + blueNumberTwo;

    let hexaRgb = `#${hexaRed}${hexaGreen}${hexaBlue}`;
    document.querySelector("main").style.backgroundColor = hexaRgb;
    document.querySelector("#colorText").textContent = hexaRgb;
  });
});
