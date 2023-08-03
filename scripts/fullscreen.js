// DOMContentLoaded Это событие срабатывает, когда загрузилась DOM-структура 
// страницы. Весь JavaScript код, который использует DOM элементы, 
// следует размещать внутри этой функции. Это гарантирует, что 
// скрипт начнет выполняться 
// только после того, как вся страница будет полностью загружена.

document.addEventListener("DOMContentLoaded", function () {
    const newImgs = document.querySelectorAll(".new-img");
    const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
    const fullscreenImg = document.querySelector(".fullscreen-img");
    const closeBtn = document.querySelector(".close-btn");


    // expandImage(imgSrc): Эта функция принимает путь к изображению imgSrc 
    // и использует его для установки значения src атрибута у элемента 
    // с классом "fullscreen-img", 
    // чтобы отобразить увеличенное изображение в полноэкранном режиме. 
    function expandImage(imgSrc) {
        fullscreenImg.src = imgSrc;
        fullscreenOverlay.style.display = "flex";
        // document.body.style.overflow = "hidden"; // Предотвращаем прокрутку страницы
    }

    function closeFullscreen() {
        fullscreenOverlay.style.display = "none";
        // document.body.style.overflow = "auto"; // Восстанавливаем прокрутку страницы
    }

    newImgs.forEach(function (img) {
        img.addEventListener("click", function () {
            expandImage(img.src);
        });
    });

    closeBtn.addEventListener("click", closeFullscreen);
});