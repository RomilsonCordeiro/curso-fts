document.querySelectorAll("button").forEach((btnContent) => {
  btnContent.addEventListener("click", () => {
    if (btnContent.textContent == "w") {
      new Audio("/sounds/tom-3.mp3").play();
    } else if (btnContent.textContent == "a") {
      new Audio("/sounds/tom-1.mp3").play();
    } else if (btnContent.textContent == "s") {
      new Audio("/sounds/tom-4.mp3").play();
    } else if (btnContent.textContent == "d") {
      new Audio("/sounds/tom-2.mp3").play();
    } else if (btnContent.textContent == "j") {
      new Audio("/sounds/crash.mp3").play();
    } else if (btnContent.textContent == "k") {
      new Audio("/sounds/kick-bass.mp3").play();
    } else if (btnContent.textContent == "l") {
      new Audio("/sounds/snare.mp3").play();
    }
  });
});

document.addEventListener("keydown", (keyClicked) => {
  if (keyClicked.key == "w") {
    new Audio("/sounds/tom-3.mp3").play();
    document.querySelector(".w").classList.add("active");
  } else if (keyClicked.key == "a") {
    new Audio("/sounds/tom-1.mp3").play();
    document.querySelector(".a").classList.add("active");
  } else if (keyClicked.key == "s") {
    new Audio("/sounds/tom-4.mp3").play();
    document.querySelector(".s").classList.add("active");
  } else if (keyClicked.key == "d") {
    new Audio("/sounds/tom-2.mp3").play();
    document.querySelector(".d").classList.add("active");
  } else if (keyClicked.key == "j") {
    new Audio("/sounds/crash.mp3").play();
    document.querySelector(".j").classList.add("active");
  } else if (keyClicked.key == "k") {
    new Audio("/sounds/kick-bass.mp3").play();
    document.querySelector(".k").classList.add("active");
  } else if (keyClicked.key == "l") {
    new Audio("/sounds/snare.mp3").play();
    document.querySelector(".l").classList.add("active");
  }
});

document.addEventListener("keyup", (keyClicked) => {
  if (keyClicked.key == "w") {
    document.querySelector(".w").classList.remove("active");
  } else if (keyClicked.key == "a") {
    document.querySelector(".a").classList.remove("active");
  } else if (keyClicked.key == "s") {
    document.querySelector(".s").classList.remove("active");
  } else if (keyClicked.key == "d") {
    document.querySelector(".d").classList.remove("active");
  } else if (keyClicked.key == "j") {
    document.querySelector(".j").classList.remove("active");
  } else if (keyClicked.key == "k") {
    document.querySelector(".k").classList.remove("active");
  } else if (keyClicked.key == "l") {
    document.querySelector(".l").classList.remove("active");
  }
});
