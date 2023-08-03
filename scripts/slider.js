// Получаем элементы слайдера
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

// Устанавливаем текущий индекс слайда
let currentIndex = 0;

// Функция для переключения слайдов

// slides[0].offsetWidth: Это свойство offsetWidth представляет 
// ширину первого слайда в пикселях.В предположении, что все 
// слайды имеют одинаковую ширину, мы можем использовать значение
//  ширины первого слайда для всех остальных слайдов.

// currentIndex: Это переменная, которая хранит индекс текущего
//  активного слайда.

// const offset = -currentIndex * slides[0].offsetWidth;: 
// В этой строке мы вычисляем смещение(offset) для слайдера, 
// чтобы показать нужный слайд.Умножая currentIndex на ширину 
// первого слайда(slides[0].offsetWidth), мы получаем значение 
// смещения в пикселях, которое будет применено к слайдеру.

// Значение offset будет отрицательным, потому что для 
// перемещения слайдов влево мы используем отрицательное 
// значение.Это связано с тем, что мы используем свойство 
// translateX с отрицательным значением для смещения слайдера влево.

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    const offset = -currentIndex * slides[0].offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

// Переключение на следующий слайд


// currentIndex: Это переменная, которая хранит текущий индекс
//  активного слайда.
// (currentIndex + 1): Здесь мы увеличиваем значение currentIndex на 
// 1. Это означает переключение на следующий слайд.
// slides.length: Это количество слайдов в слайдере. slides - 
// это коллекция слайдов, которую мы получили в начале кода.
// %: Это операция остатка от деления (также называемая "modulo"). 
// В данном случае она используется для того, чтобы зациклить переключение 
// слайдов в случае, когда мы достигаем последнего слайда и хотим вернуться 
// к первому слайду.
// Давайте проиллюстрируем это на примере. Предположим, у нас есть 
// 4 слайда, и currentIndex равен 2 (текущий активный слайд - третий). 
// Если бы мы просто увеличили currentIndex на 1 (currentIndex + 1), 
// мы получили бы 3 (индекс следующего слайда). Теперь, когда мы применяем 
// операцию % к slides.length, получим (2 + 1) % 4 = 3 % 4 = 3. В этом случае 
// мы получаем 3, что означает, что переключение на следующий слайд происходит 
// корректно.
// Однако, если currentIndex уже равен 3 (последний слайд), применение 
// операции % обеспечит зацикливание переключения, возвращая 
// значение (3 + 1) % 4 = 4 % 4 = 0. Таким образом, когда мы достигаем 
// последнего слайда, функция nextSlide() вернет currentIndex = 0, что 
// переключит слайдер на первый слайд, и так далее.


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

// (currentIndex - 1 + slides.length): Здесь мы уменьшаем 
// значение currentIndex на 1. 
// Это означает переключение на предыдущий слайд.

// slides.length: Количество слайдов в слайдере.
// %: Операция остатка от деления, которая здесь 
// используется для зацикливания переключения, аналогично функции nextSlide().
// Допустим, у нас снова 4 слайда, и currentIndex
//  равен 1 (текущий активный слайд - второй). Если
//   мы просто уменьшим currentIndex на 1 (currentIndex - 1), 
//   мы получим 0 (индекс предыдущего слайда). Но так как 
//   зацикливание обеспечивается операцией %, когда мы применяем 
//   ее, получим (1 - 1 + 4) % 4 = 0 % 4 = 0. В этом случае мы 
//   также получаем 0, и переключение на предыдущий слайд происходит корректно.
// Если currentIndex уже равен 0 (первый слайд), применение 
// операции % вернет (0 - 1 + 4) % 4 = 3 % 4 = 3, что означает 
// переключение на последний слайд (таким образом, реализуется зацикливание).
// Таким образом, операция % обеспечивает циклическое переключение 
// слайдов, позволяя слайдеру переходить от последнего слайда к первому и обратно.

// Переключение на предыдущий слайд
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
}

// Переключение слайдов при нажатии на кнопки "Next" и "Previous"
document.querySelector("#nextBtn").addEventListener("click", nextSlide);
document.querySelector("#prevBtn").addEventListener("click", prevSlide);