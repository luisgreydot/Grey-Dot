$(document).ready(function ($){
	//Cargamos la función Stellar que nos dará el efecto parallax.
	$(function(){
      $(window).stellar(); 
  	});

  	//Activa el Scroll Horizontal
  	$(function() {
        $('nav a').bind('click',function(event){
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 2000);
            event.preventDefault();
        });
    });

    //Cargamos el scroll del cuadro de clientes
    $(function(){
      $('.nano').nanoScroller({
        preventPageScrolling: true
      });
    });
});