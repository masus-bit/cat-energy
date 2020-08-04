(function() {
    var prev = document.querySelector('.bef')
    var next = document.querySelector('.aft')
    var imgs = document.querySelectorAll('.example-img')
    prev.addEventListener('click', function() {
        var i = 0;

        imgs[i].classList.toggle('shown')
        imgs[i + 1].classList.toggle('shown')

    })
    next.addEventListener('click', function() {
        var i = 0;

        imgs[i].classList.toggle('shown')
        imgs[i + 1].classList.toggle('shown')

    })
})()