// Простой слайдер для главной страницы
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Меняем слайд каждые 3 секунды
showSlide(currentSlide);

// Функция для фильтрации героев
function filterHeroes(category) {
    const allHeroes = document.querySelectorAll('.hero-card');
    allHeroes.forEach(hero => {
        hero.style.display = 'block'; // Показываем всех героев
        if (category !== 'all' && !hero.classList.contains(category)) {
            hero.style.display = 'none'; // Скрываем героев, которые не соответствуют категории
        }
    });
}

// Добавление обработчика событий на кнопки фильтрации
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterHeroes(category);
    });
});

// Валидация формы обратной связи
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Сообщение отправлено!');
        this.reset(); // Сбрасываем форму
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

// Добавление анимации к кнопкам при наведении
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Пример динамического добавления контента на страницу
const discussions = [
    { title: 'Тема 1', replies: 5 },
    { title: 'Тема 2', replies: 3 },
    { title: 'Тема 3', replies: 8 },
];

const forumList = document.querySelector('.forum-discussions ul');
discussions.forEach(discussion => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#">${discussion.title}</a> - ${discussion.replies} ответов`;
    forumList.appendChild(li);
});

// Функция для отображения информации о герое
function getHeroDetails(id) {
    const heroes = {
        1: {
            name: "Герой 1",
            description: "Герой 1 известен своей высокой мобильностью и способностью наносить большой урон.",
            abilities: [
                "Быстрый удар - наносит урон врагу.",
                "Увеличение скорости - временно увеличивает скорость передвижения.",
                "Щит - защищает от урона на короткое время.",
                "Удар молнии - наносит большой урон всем врагам в области."
            ]
        },
        2: {
            name: "Герой 2",
            description: "Герой 2 может выдерживать много урона и защищать своих союзников.",
            abilities: [
                "Защитный щит - уменьшает урон от атак.",
                "Увеличение здоровья - временно увеличивает максимальное здоровье.",
                "Контратака - наносит урон врагу, когда получает удар."
            ]
        },
        3: {
            name: "Герой 3",
            description: "Герой 3 помогает команде с помощью своих уникальных способностей.",
            abilities: [
                "Лечение - восстанавливает здоровье союзникам.",
                "Улучшение способностей - увеличивает эффективность способностей союзников.",
                "Контроль толпы - замедляет врагов в области."
            ]
        }
    };

    return heroes[id];
}

// Пример использования функции getHeroDetails
const urlParams = new URLSearchParams(window.location.search);
const heroId = urlParams.get('id');
if (heroId) {
    const heroDetails = getHeroDetails(heroId);
    document.querySelector('.hero-detail h1').textContent = heroDetails.name;
    document.querySelector('.hero-detail p').textContent = heroDetails.description;
    const abilitiesList = document.querySelector('.hero-detail ul');
    abilitiesList.innerHTML = '';
    heroDetails.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability;
        abilitiesList.appendChild(li);
    });
}
