"use strict";
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", function () {
  let random = (Math.random() * 0xfffff * 1000000).toString(16);
  let randomColor = `#${random.slice(0, 6)}`;
  text.innerHTML = randomColor;
  document.body.style.backgroundColor = `${randomColor}`;
});
