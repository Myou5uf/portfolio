const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");

// * Изменить контент
const changeContent = (array, value) => {
    // Менять блок с картинками по клику на кнопку
    array.forEach((element) => {
        // Если дата-атрибут блока array совпадает с дата-атрибутом value
        if (element.dataset.tabsField === value) {
            // Удалить класс hidden
            element.classList.remove("hidden");
        } else {
            // иначе добавить класс hidden
            element.classList.add("hidden");
        }
    });
};

// Менять контент по клику на кнопки
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", (event) => {
        const dataValue = tabButton.dataset.tabsHandler;
        document.title = tabButton.textContent; // Менять title вкладки браузера на текст из загаловка таба
        changeContent(tabDescriptions, dataValue); // Вызов функции изменения блока описания
        changeContent(tabImages, dataValue); // Вызов функции изменения блока картинок
        // Менять активность кнопки по клику
        tabButtons.forEach((btn, index) => {
            // Для нажатой кнопки добавить класс
            if (btn === event.target) {
                btn.classList.add("design-list__item_active");
            } else {
                // для другой удалить класс
                btn.classList.remove("design-list__item_active");
            }
        });
    });
});
