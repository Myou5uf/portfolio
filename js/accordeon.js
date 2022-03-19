const accordeon = document.querySelector(".feature-list"); // Аккордеон
const accordeonButtons = document.querySelectorAll(".feature__link"); // Кнопки Аккордеона

// Перебрать все кнопки
accordeonButtons.forEach((btn) => {
    // При клике на кнопку
    btn.addEventListener("click", () => {
        // закрыть все остальные элементы аккордеона, кроме активного
        accordeonButtons.forEach((button) => {
            // Удалить класс, тем самым перевернув кнопку
            button.classList.remove("feature__link_active");
            // Скрыть контентный блок, добавив класс hidden
            button.nextElementSibling.classList.add("hidden");
        });
        // Перключить состояние кнопки
        btn.classList.toggle("feature__link_active");
        // Перключить состояние контентного блока
        btn.nextElementSibling.classList.toggle("hidden");
    });
});
