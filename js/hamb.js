$(document).ready(function () {
	$('.header_humb').on('click', function(){
		$(this).toggleClass('header_humb_active')
		$(document).find('.nav').toggleClass('nav_active')
	  })

})