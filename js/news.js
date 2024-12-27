// script.js

// Получение всех новостных элементов
const newsItems = document.querySelectorAll('.news-item');

// Добавление обработчиков событий для кнопок "Читать далее"
newsItems.forEach(item => {
    const readMoreBtn = item.querySelector('.read-more');
    readMoreBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const articleId = item.getAttribute('data-id');
        showArticleDetails(articleId);
    });
});

// Функция для отображения деталей статьи
function showArticleDetails(id) {
    // Здесь можно добавить логику для загрузки и отображения деталей статьи
    alert(`Показать детали статьи с ID: ${id}`);
}
