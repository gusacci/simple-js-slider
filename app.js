const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

//buttons

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "#fcb2cc";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 350}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "#f95b92";
  });
});

// slider

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 350}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 350}px)`;
  slideNumber--;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 350}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#f95b92";
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#f95b92";
});
