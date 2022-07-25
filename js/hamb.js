$(document).ready(function () {
	$('.header_humb').on('click', function(){
		$(this).toggleClass('header_humb_active')
		$(document).find('.nav').toggleClass('nav_active')
	  })

		$("body").on('click', '[href*="#"]', function(e){
		 var fixed_offset = 0;
		 $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		 e.preventDefault();})


var Nav1 = $('.services_nav_1')
var Item1 = $('.services_item_1')
var Nav2 = $('.services_nav_2')
var Item2 = $('.services_item_2')
var Nav3 = $('.services_nav_3')
var Item3 = $('.services_item_3')
var Price1 = $('.services_2_price_item_1')
var Price2 = $('.services_2_price_item_2')
var Price3 = $('.services_2_price_item_3')

Nav1.on('click', function(){
  Item2.removeClass('_active')
  Item3.removeClass('_active')
  Item1.addClass('_active')
  Nav1.addClass('_active')
  Nav2.removeClass('_active')
  Nav3.removeClass('_active')
  Price1.addClass('_active')
  Price2.removeClass('_active')
  Price3.removeClass('_active')
})
Nav2.on('click', function(){
  Item2.addClass('_active')
  Item3.removeClass('_active')
  Item1.removeClass('_active')
  Nav1.removeClass('_active')
  Nav2.addClass('_active')
  Nav3.removeClass('_active')
  Price2.addClass('_active')
  Price1.removeClass('_active')
  Price3.removeClass('_active')
})
Nav3.on('click', function(){
  Item2.removeClass('_active')
  Item3.addClass('_active')
  Item1.removeClass('_active')
  Nav1.removeClass('_active')
  Nav2.removeClass('_active')
  Nav3.addClass('_active')
  Price3.addClass('_active')
  Price2.removeClass('_active')
  Price1.removeClass('_active')
})

})
