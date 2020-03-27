$(document).ready(function () {
    $('.btn-navigation').click(function () {
        $(this).find('.barre').toggleClass('white');
        $('.nav-bar-escalade').toggleClass('isOpen');

    });
});

// Open alert when submit form

function congrats() {
    alert("Merci pour votre message ! Nous reviendrons vers vous au plus vite !")
};


