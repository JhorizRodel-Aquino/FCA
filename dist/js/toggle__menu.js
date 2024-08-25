const toggleMenu = document.querySelector(".toggle__menu");
const headerPanel = document.querySelector(".header__panel")
const body = document.querySelector("body")

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerPanel.classList.toggle("open");
    body.classList.toggle("open");
});