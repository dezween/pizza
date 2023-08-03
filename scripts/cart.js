document.addEventListener("DOMContentLoaded", function () {
    const pizzaBtns = document.querySelectorAll(".pizza-btn");
    const btnNum = document.querySelector(".btn-num");
    let count = 1;
    pizzaBtns.forEach(function (btn, index) {
        

        btn.addEventListener("click", function () {
            count++;
            btnNum.textContent = count;
        });
    });
});