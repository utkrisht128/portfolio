const mainMenu = document.querySelector(".link");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click",() => {
    openMenu.classList.toggle("active");
    mainMenu.classList.toggle("active");
});
