const menuEl = document.querySelector(".hamburger");
const icons = document.querySelectorAll(".hamburger__icon");
const navEl = document.querySelector(".nav");
const buttons = document.querySelector(".header__buttons");

menuEl.addEventListener("click", () => {
  navEl.classList.toggle("show");
  buttons.classList.toggle("show");
  const isVisible = navEl.classList.contains("show");
  if (isVisible === true) {
    icons[0].setAttribute("data-visible", "false");
    icons[1].setAttribute("data-visible", "true");
  } else {
    icons[0].setAttribute("data-visible", "true");
    icons[1].setAttribute("data-visible", "false");
  }
});
