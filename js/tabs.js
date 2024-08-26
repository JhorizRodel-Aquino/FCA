const tabs = document.querySelectorAll(".FAQ__category");
const contents = document.querySelectorAll(".FAQ__content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        removeActiveTab();
        tab.classList.add("active");
        removeActiveContent();
        contents[index].classList.add("active");
    });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}