const modalButtons = document.querySelectorAll(".more"); // Кнопки - узнать больше
const modal = document.querySelector(".modal"); // Блок с модальной формой
const overlay = modal.querySelector(".overlay");
const modalClose = modal.querySelector(".modal__close"); // Крестик в модальной форме

// Открыть модальную форму при клике на кнопку - Узнать больше
modalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
});

// Закрыть форму при клике вне самой формы
overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Закрыть форму при клике на крестик
modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
});
