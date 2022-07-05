const menu = document.getElementById('menu');
const nav_text = document.getElementById('nav_text_row');
menu.onclick = function () {
    menu.classList.toggle('__active');
    nav_text.classList.toggle('__active');
}

window.addEventListener("resize", displayWindowSize);

function displayWindowSize() {
    var w = document.documentElement.clientWidth;

    if (w >= 1200) {
        menu.classList.remove('__active');
        nav_text.classList.remove('__active');        
    }
}    