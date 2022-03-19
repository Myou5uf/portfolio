const burger = document.querySelector(".humburger-menu"); // Кнопка меню
const burgerMenu = document.querySelector(".menu"); // Навигационное меню
const menuListItem = document.querySelectorAll(".menu-list__item"); // Элементы меню

// При клике на бургер открыть навигационное меню
burger.addEventListener("click", () => {
    burgerMenu.classList.add("menu-active");
});

//  закрывать меню если нажал на один из элементов меню
menuListItem.forEach((item) => {
    item.addEventListener("click", () => {
        burgerMenu.classList.remove("menu-active");
    });
});

// Закрывать меню, если кликнул мимо меню
document.addEventListener("click", (event) => {
    // Если у кликнутого элемента либо у его родителей НЕ БУДЕТ класс .menu или .humburger-menu
    if (!(event.target.closest(".menu") || event.target.closest(".humburger-menu"))) {
        // значит мы кликнули МИМО меню => закрываем меню
        burgerMenu.classList.remove("menu-active");
    }
});
