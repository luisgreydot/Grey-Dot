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

  //Función para hacer que las secciones queden prendidas cuando estan en una sección
  $(function() {
      var sections = $('section');
      var navigation_links = $('nav a');
      var navigation_span = $('.arrow span')
      sections.waypoint({
        handler: function(event, direction) {
          var active_section = $(this);
          var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
          var active_span = $('nav a[href="#' + active_section.attr("id") + '"] span');
          navigation_links.removeClass("selected");
          navigation_span.removeClass("selected_span");
          active_link.addClass("selected");
          active_span.addClass("selected_span");
        },
        horizontal: true, 
      });
  });

  //Carga el efecto lightbox de las galerías
  $("#nuestro_trabajo_print").click(function() {
    $.fancybox.open([
      {
        href : 'img/portafolio/portafolio_sanborns_1.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_2.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_3.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_4.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_5.jpg',
        title : 'Leas donde leas'
      },{
        href : 'img/portafolio/portafolio_sanborns_6.jpg',
        title : 'Festival Gourmet Internacional'
      },{
        href : 'img/portafolio/portafolio_fujifilm_1.jpg',
        title : 'Fujifilm X100 S'
      },{
        href : 'img/portafolio/portafolio_fujifilm_2.jpg',
        title : 'Fujifilm XF1'
      },{
        href : 'img/portafolio/portafolio_fujifilm_3.jpg',
        title : 'Fujifilm Finepix XP 200'
      },{
        href : 'img/portafolio/portafolio_fujifilm_4.jpg',
        title : 'Fujifilm Acuty LED'
      },{
        href : 'img/portafolio/portafolio_fujifilm_5.jpg',
        title : 'Fujifilm Finepix XP 150'
      },{
        href : 'img/portafolio/portafolio_fujifilm_6.jpg',
        title : 'Fujifilm XPro 1'
      },{
        href : 'img/portafolio/portafolio_philips_1.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_2.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_3.jpg',
        title : 'Philips LED'
      },{
        href : 'img/portafolio/portafolio_philips_4.jpg',
        title : 'Philips SlimStyle'
      },{
        href : 'img/portafolio/portafolio_philips_5.jpg',
        title : 'Philips HUE'
      },{
        href : 'img/portafolio/portafolio_vepormas_1.jpg',
        title : 'Ve por más 10 años'
      },{
        href : 'img/portafolio/portafolio_vepormas_2.jpg',
        title : 'Ve por más hagamos que suceda'
      },{
        href : 'img/portafolio/portafolio_vepormas_3.jpg',
        title : 'Ve por más crédito hipotecario'
      },{
        href : 'img/portafolio/portafolio_pilotos_1.jpg',
        title : 'Pilotos por la seguridad'
      },{
        href : 'img/portafolio/portafolio_pepsi_1.jpg',
        title : 'Pepsi'
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

  $('#nuestro_trabajo_tv')
        .attr('rel', 'media-gallery')
        .fancybox({
          openEffect : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',

          arrows : false,
          helpers : {
            media : {},
            buttons : {}
          }
        });

  $("#nuestro_trabajo_radio").click(function() {
    $.fancybox.open([
      {
        href : 'img/portafolio/portafolio_sanborns_1.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_2.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_3.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_4.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_5.jpg',
        title : 'Leas donde leas'
      },{
        href : 'img/portafolio/portafolio_sanborns_6.jpg',
        title : 'Festival Gourmet Internacional'
      },{
        href : 'img/portafolio/portafolio_fujifilm_1.jpg',
        title : 'Fujifilm X100 S'
      },{
        href : 'img/portafolio/portafolio_fujifilm_2.jpg',
        title : 'Fujifilm XF1'
      },{
        href : 'img/portafolio/portafolio_fujifilm_3.jpg',
        title : 'Fujifilm Finepix XP 200'
      },{
        href : 'img/portafolio/portafolio_fujifilm_4.jpg',
        title : 'Fujifilm Acuty LED'
      },{
        href : 'img/portafolio/portafolio_fujifilm_5.jpg',
        title : 'Fujifilm Finepix XP 150'
      },{
        href : 'img/portafolio/portafolio_fujifilm_6.jpg',
        title : 'Fujifilm XPro 1'
      },{
        href : 'img/portafolio/portafolio_philips_1.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_2.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_3.jpg',
        title : 'Philips LED'
      },{
        href : 'img/portafolio/portafolio_philips_4.jpg',
        title : 'Philips SlimStyle'
      },{
        href : 'img/portafolio/portafolio_philips_5.jpg',
        title : 'Philips HUE'
      },{
        href : 'img/portafolio/portafolio_vepormas_1.jpg',
        title : 'Ve por más 10 años'
      },{
        href : 'img/portafolio/portafolio_vepormas_2.jpg',
        title : 'Ve por más hagamos que suceda'
      },{
        href : 'img/portafolio/portafolio_vepormas_3.jpg',
        title : 'Ve por más crédito hipotecario'
      },{
        href : 'img/portafolio/portafolio_pilotos_1.jpg',
        title : 'Pilotos por la seguridad'
      },{
        href : 'img/portafolio/portafolio_pepsi_1.jpg',
        title : 'Pepsi'
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

  $("#fotografia_galeria").click(function() {
    $.fancybox.open([
      {
        href : 'img/portafolio/portafolio_sanborns_1.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_2.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_3.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_4.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_5.jpg',
        title : 'Leas donde leas'
      },{
        href : 'img/portafolio/portafolio_sanborns_6.jpg',
        title : 'Festival Gourmet Internacional'
      },{
        href : 'img/portafolio/portafolio_fujifilm_1.jpg',
        title : 'Fujifilm X100 S'
      },{
        href : 'img/portafolio/portafolio_fujifilm_2.jpg',
        title : 'Fujifilm XF1'
      },{
        href : 'img/portafolio/portafolio_fujifilm_3.jpg',
        title : 'Fujifilm Finepix XP 200'
      },{
        href : 'img/portafolio/portafolio_fujifilm_4.jpg',
        title : 'Fujifilm Acuty LED'
      },{
        href : 'img/portafolio/portafolio_fujifilm_5.jpg',
        title : 'Fujifilm Finepix XP 150'
      },{
        href : 'img/portafolio/portafolio_fujifilm_6.jpg',
        title : 'Fujifilm XPro 1'
      },{
        href : 'img/portafolio/portafolio_philips_1.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_2.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_3.jpg',
        title : 'Philips LED'
      },{
        href : 'img/portafolio/portafolio_philips_4.jpg',
        title : 'Philips SlimStyle'
      },{
        href : 'img/portafolio/portafolio_philips_5.jpg',
        title : 'Philips HUE'
      },{
        href : 'img/portafolio/portafolio_vepormas_1.jpg',
        title : 'Ve por más 10 años'
      },{
        href : 'img/portafolio/portafolio_vepormas_2.jpg',
        title : 'Ve por más hagamos que suceda'
      },{
        href : 'img/portafolio/portafolio_vepormas_3.jpg',
        title : 'Ve por más crédito hipotecario'
      },{
        href : 'img/portafolio/portafolio_pilotos_1.jpg',
        title : 'Pilotos por la seguridad'
      },{
        href : 'img/portafolio/portafolio_pepsi_1.jpg',
        title : 'Pepsi'
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

  $("#fotografia_stand").click(function() {
    $.fancybox.open([
      {
        href : 'img/portafolio/portafolio_sanborns_1.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_2.jpg',
        title : 'Institucional'
      }, {
        href : 'img/portafolio/portafolio_sanborns_3.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_4.jpg',
        title : 'Libros Digitales'
      },{
        href : 'img/portafolio/portafolio_sanborns_5.jpg',
        title : 'Leas donde leas'
      },{
        href : 'img/portafolio/portafolio_sanborns_6.jpg',
        title : 'Festival Gourmet Internacional'
      },{
        href : 'img/portafolio/portafolio_fujifilm_1.jpg',
        title : 'Fujifilm X100 S'
      },{
        href : 'img/portafolio/portafolio_fujifilm_2.jpg',
        title : 'Fujifilm XF1'
      },{
        href : 'img/portafolio/portafolio_fujifilm_3.jpg',
        title : 'Fujifilm Finepix XP 200'
      },{
        href : 'img/portafolio/portafolio_fujifilm_4.jpg',
        title : 'Fujifilm Acuty LED'
      },{
        href : 'img/portafolio/portafolio_fujifilm_5.jpg',
        title : 'Fujifilm Finepix XP 150'
      },{
        href : 'img/portafolio/portafolio_fujifilm_6.jpg',
        title : 'Fujifilm XPro 1'
      },{
        href : 'img/portafolio/portafolio_philips_1.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_2.jpg',
        title : 'Philips Ilumina tu Hogar'
      },{
        href : 'img/portafolio/portafolio_philips_3.jpg',
        title : 'Philips LED'
      },{
        href : 'img/portafolio/portafolio_philips_4.jpg',
        title : 'Philips SlimStyle'
      },{
        href : 'img/portafolio/portafolio_philips_5.jpg',
        title : 'Philips HUE'
      },{
        href : 'img/portafolio/portafolio_vepormas_1.jpg',
        title : 'Ve por más 10 años'
      },{
        href : 'img/portafolio/portafolio_vepormas_2.jpg',
        title : 'Ve por más hagamos que suceda'
      },{
        href : 'img/portafolio/portafolio_vepormas_3.jpg',
        title : 'Ve por más crédito hipotecario'
      },{
        href : 'img/portafolio/portafolio_pilotos_1.jpg',
        title : 'Pilotos por la seguridad'
      },{
        href : 'img/portafolio/portafolio_pepsi_1.jpg',
        title : 'Pepsi'
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

  //Carga la validación del formulario
  $("#formulario").validationEngine();
});

