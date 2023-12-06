if($(window).width() <= 992){
    $('.block-recommendation .row').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });
    $('.best-grid .row').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });
    $("body").on("click", ".selector-item.active", function(){
        $(".selector-list").toggleClass("active");
    });
    $(".selector-item").click(function(){
        $('.best-grid .row').slick("unslick");
        $('.best-grid .row').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        });
    });
} else {
    $("nav li.has-child").on("mouseenter", function(){
        $(this).find("ul").fadeIn();
    });
    $(".has-child ul").on("mouseleave", function(){
        $(this).fadeOut();
    });
}

$(".selector-item").click(function(){
    var selector = $(this).data("selector");
    $(".selector-item").removeClass("active");
    $(".best-grid").removeClass("active");
    $(".block-best").find("[data-selector='" + selector + "']").addClass("active"); 
});

$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true
});

$(".faq-item-head").click(function(){
    $(this).parent().toggleClass("active");
});

var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        
    });

    return false;
});

$(".btn-menu").click(function(){
    $(".header-nav").fadeToggle();
    $("body").toggleClass("noscroll");
});

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}