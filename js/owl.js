jQuery(document).ready(function ($) {

$('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    items:3,
    autoplay : true,
    autoplayTimeout : 3500,
    autoplaySpeed: 2000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

})
