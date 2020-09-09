$('.count-num').each(function(){
    $(this).prop('Counter',0).animate({
        Counter:$(this).text()
    },{
        duration: 4000,
        easing: 'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
    });
});


$(document).ready(function() {
    $('.agents__slider').slick({
        arrows: false,
        variableWidth: true,
        infinite: true,
        // adaptiveWidth: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        
    });    
});