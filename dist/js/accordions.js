const accordions = document.querySelectorAll(".FAQ__item h3");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        accordion.nextElementSibling.classList.toggle("open");
        accordion.querySelector("i").classList.toggle("open");
    });
});