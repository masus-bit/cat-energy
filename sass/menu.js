(function() {
    var menuButton = document.querySelector('.burger')
    var menuButtonClose = document.querySelector('.burger--active')
    var menu = document.querySelector('.nav-menu__list--wrapper')
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('burger--active')
        menu.classList.toggle('nav-menu--active')
    })
    menuButtonClose.addEventListener('click', function() {
        menuButton.classList.toggle('burger--active')
    })



})()