const menuLinks = document.querySelectorAll(".menu-list__link"); // все ссылки в навигации
const mainBtn = document.querySelector(".main__button"); // Кнопка - тест-драйв
const headerLogo = document.querySelector(".header__logo"); // Лого
const mainScrollBtn = document.querySelector(".main__scroll"); // Кнопка скролл

const allLinks = [...menuLinks, mainBtn, headerLogo, mainScrollBtn]; // Новый массив с элементами для плавного скролла

// Перебираем каждую ссылку
allLinks.forEach((link) => {
    // вешаем на каждую ссылку обработчик событий по клику
    link.addEventListener("click", (event) => {
        // останавливаем стандартное поведение по клику на ссылку
        event.preventDefault();
        // идентификатор секции из атрибута href кликнутой ссылки
        const id = link.getAttribute("href").substring(1); // отрезаем 1й символ (#)
        const section = document.getElementById(id); // нужная секция для перехода

        // Если секция существует
        if (section) {
            // производим плавный скролл до этой секции
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    });
});
