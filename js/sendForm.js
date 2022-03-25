const forms = document.querySelectorAll("form"); // все формы

// перебираем все формы
forms.forEach((form) => {
    // Обработчик события submit
    form.addEventListener("submit", (event) => {
        // останавливаем стандартное поведение submit (отправка данных методом GET и перезапуск страницы)
        event.preventDefault();

        // Объект FormData
        const formData = new FormData(form);

        // Добавляем свойство form со значением класса для уточнения с какой формы был отправлен запрос
        formData.append("form", form.classList.value);

        // Полученные данные из формы
        const body = {};

        // Перебираем элементы FormData'ы
        formData.forEach((value, field) => {
            // value - введенное значение в поле input
            // field - каждый input (атрибут name)
            body[field] = value; // заполняем объект body полученными данными из формы
        });

        // Отправляем полученные данные на JSONPlaceholder
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            // Получаем ответ от сервера - responce
            .then((responce) => {
                // Если нет ошибок при отправке на сервер (свойство - ок)
                if (responce.ok) {
                    // возвращем responce в виде json
                    return responce.json();
                } else {
                    // иначе выкидываем ошибку
                    throw new Error(responce.status);
                }
            })
            .then((data) => {
                alert("Данные отправлены успешно!");
            })
            // обрабатываем ошибку
            .catch((error) => {
                // выводим ошибку
                alert("Данные отправлены с ошибкой " + error.message);
            })
            .finally(() => {
                // чистим форму после отправки данных
                form.reset();
            });
    });
});
