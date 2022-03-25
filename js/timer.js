const timerBlock = document.querySelector(".timer__time"); // блок таймера
const deadLine = "24 march 2022"; // дедлайн

let interval; // Идентификатор интервала

// * Обновить время в блоке timerBlock
const updateClock = () => {
    const date = new Date().getTime(); // кол-во секунд с 1.01.1970года до текущего времени
    const dateDeadLine = new Date(deadLine).getTime(); // кол-во секунд до дедлайна
    const timeRemaning = (dateDeadLine - date) / 1000; // Кол-во оставшихся мс

    const hours = Math.floor(timeRemaning / 60 / 60); // Кол-во оставшихся часов
    const minutes = Math.floor((timeRemaning / 60) % 60); // минут
    const seconds = Math.floor(timeRemaning % 60); // секунд

    // Добавляем нолик в начало, если часы, минуты или секунды меньше 10
    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;
    // console.log();
    // меняем текстовое содержимое блока timerBlock
    timerBlock.textContent = `${fHours}:${fMinutes}:${fSeconds}`; // задаем текущее для таймера

    // Если времени не осталось
    if (timeRemaning < 0) {
        // остановить таймер
        clearInterval(interval);
        // задать текстовое содержимое для timerBlock
        timerBlock.textContent = "00:00:00";
    }
};

updateClock();

// Вызывать функцию updateClock каждые 500 мс (Милисекунды)
interval = setInterval(updateClock, 500);
