// Picture change on cards
document.addEventListener('DOMContentLoaded', function () {
    var gliders = document.querySelectorAll('.glide');
    for (var i = 0; i < gliders.length; i++) {
        // Effects
        new Glide(gliders[i], {
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
            autoplay: 2000,
        }).mount();
    }

    // Zoom in on card pictures
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});

// Initial website fade in
var slideInAnimation = anime({
    // Effects
    targets: 'body',
    opacity: [0, 1],
    duration: 3000,
    easing: 'easeInOutQuad'
});

document.addEventListener('DOMContentLoaded', function () {
    slideInAnimation.play();
});

// Furniture type in animation
$(document).ready(function () {
    $('.furniture').textillate({
        in: {
            initialDelay: 1000,
            delay: 150,
        }
    });
});