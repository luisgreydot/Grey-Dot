$(document).ready(function ($){
	//Carga la función Stellar que nos dará el efecto parallax.
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

  //Carga el scroll del cuadro de clientes
  $(function(){
    $('.nano').nanoScroller({
      preventPageScrolling: true
    });
  });

  //Carga el efecto lightbox de las galerías
  $("#nuestro_trabajo_print").click(function() {
    $.fancybox.open([
      {
        href : 'img/1_b.jpg',
        title : 'Proyecto 1'
      }, {
        href : 'img/2_b.jpg',
        title : 'Proyecto 2'
      }, {
        href : 'img/3_b.jpg',
        title : 'Proyecto 3'
      }
    ], {
      helpers : {
        thumbs : {
          width: 75,
          height: 50
        }
      }
    });
  });
  $("#nuestro_trabajo_tv").click(function() {
    $.fancybox.open([
      {
        href : 'img/1_b.jpg',
        title : 'Proyecto 1'
      }, {
        href : 'img/2_b.jpg',
        title : 'Proyecto 2'
      }, {
        href : 'img/3_b.jpg',
        title : 'Proyecto 3'
      }
    ], {
      helpers : {
        thumbs : {
          width: 75,
          height: 50
        }
      }
    });
  });
  $("#nuestro_trabajo_radio").click(function() {
    $.fancybox.open([
      {
        href : 'img/1_b.jpg',
        title : 'Proyecto 1'
      }, {
        href : 'img/2_b.jpg',
        title : 'Proyecto 2'
      }, {
        href : 'img/3_b.jpg',
        title : 'Proyecto 3'
      }
    ], {
      helpers : {
        thumbs : {
          width: 75,
          height: 50
        }
      }
    });
  });

  //Activa el scroll del cuadro de clientes
  $(function(){
    $('.nano').nanoScroller({
      preventPageScrolling: true
    });
  });

  //Activa el botón de cerrado y abierto
  $("#toggle_clientes").click(function(){
    $("#clientes_lista").toggle("showOrHide");
  });

  //Carga la validación del formulario
  $("#formulario").validationEngine();
});

