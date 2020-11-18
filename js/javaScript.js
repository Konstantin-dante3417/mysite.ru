scrollElement();
function scrollElement () {
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});
};
$(window).scroll(function() {
    if($(this).scrollTop() > 120) {
        $('.scroll-top').css({
            transform: 'scale(1)'
        });
    } else {
        $('.scroll-top').css({
            transform: 'scale(0)'
        });
    }
});
$('.scroll-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
});