// Функция для открытия модального окна
function openModal() {
    let modal = document.getElementById('modal');
    let modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
}


// Функция для закрытия модального окна
function closeModal() {
    let modal = document.getElementById('modal');
    let modalOverlay = document.getElementById('modal-overlay');
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}

// Получаем элемент кнопки "Войти" по классу
let signUpButton = document.querySelector('.nav-btn');

// Назначаем обработчик события на клик кнопки "Войти"
signUpButton.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    openModal();
});

// Получаем ссылку "Войти" по классу
let loginLink = document.querySelector('.login');

// Назначаем обработчик события на клик по ссылке "Войти"
loginLink.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки (чтобы она не переходила по адресу, указанному в href)
    openModal()
});

// Получаем ссылку "Войти" по классу
let footerBtn = document.querySelector('.footer-btn');

// Назначаем обработчик события на клик по ссылке "Войти"
footerBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки (чтобы она не переходила по адресу, указанному в href)
    openModal()
});

// Получаем элемент крестика по классу
let crossButton = document.querySelector('.cross');

// Назначаем обработчик события на клик по крестику
crossButton.addEventListener('click', function () {
    closeModal();
});




document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item");

    function smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800; // Время анимации в миллисекундах
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const ease = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, ease);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            smoothScrollTo(target);
        });
    });
});