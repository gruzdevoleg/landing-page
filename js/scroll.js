$('#scroll-button').on('click', function(){
    $('body,html').animate({scrollTop: window.innerHeight + 120}, 800);
});

$(window).on('load', function(){
    $('body,html').animate({scrollTop: 0}, 800);
});