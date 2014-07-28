<?php
	session_start();
	if(isset($_POST['changeOption']))
	{
		$disabledSubmit = $_POST['disabledSubmit'];
		if($disabledSubmit == 1) $js = 'disabledSubmit:true';
		else $js = 'disabledSubmit:false';
		
		$autoRevert = $_POST['autoRevert'];
		if($autoRevert == 1) $js .= ',autoRevert:true';
		else $js .= ',autoRevert:false';
		
		$autoSubmit = $_POST['autoSubmit'];
		if($autoSubmit == 1) $js .= ',autoSubmit:true';
		else $js .= ',autoSubmit:false';
	}
	else
	{
		$disabledSubmit = 2;
		$autoRevert = 1;
		$autoSubmit = 2;
		$js = 'disabledSubmit:true,autoRevert:true,autoSubmit:false';
	}
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <!--/*Usa motor de Chrome en Explorer*/-->
        <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>Grey Dot : Agencia de Publicidad</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="Agencia de Publicidad" />
        <link rel="icon" href="img/favicon.ico">
        <script src="js/vendor/prefixfree.js"></script>
        <link rel="stylesheet" href="css/vendor/normalize.min.css">
        <link rel="stylesheet" href="css/estilo.css"/>
        <link rel="stylesheet" href="css/vendor/jquery.fancybox.css"/>
        <link rel="stylesheet" href="css/vendor/jquery.fancybox-thumbs.css"/>
        <link rel="stylesheet" href="css/vendor/QapTcha.jquery.css"/>
        <link rel="stylesheet" href="css/vendor/validationEngine.jquery.css">
    </head>
    <body>
        <div id="back_luz"></div>
        <nav>
            <ul>
                <!--<li class="nav_arrow"><a href="#"><span class="icon-arrow-left"></span></a></li>-->
                <li id="nav_cierre_izq"></li>
                <li><a class="nav-link arrow" href="#home">Home<span></span></a></li>
                <li><a class="nav-link arrow" href="#como_pensamos">Cómo<br/>pensamos<span></span></a></li>
                <li><a class="nav-link arrow" href="#clientes">Clientes<span></span></a></li>
                <li><a class="nav-link arrow" href="#nuestro_trabajo">Nuestro<br/>Trabajo<span></span></a></li>
                <li><a class="nav-link arrow" href="#fotografia">Fotografía<span></span></a></li>
                <li><a class="nav-link arrow" href="#stand">Stand<span></span></a></li>
                <li><a class="nav-link arrow" href="#contacto">Contacto<span></span></a></li>
                <li id="nav_cierre_der"></li>
                <!--<li class="nav_arrow"><a href="#"><span class="icon-uniE601"></span></a></li>-->
            </ul>
        </nav>
        <!--/****************HOME***************/-->
        <section id="home">
            <img src="img/grey_dot_logo.png" alt="Grey Dot: Agencia de Publicidad" id="img_home">
        </section>
        
        <!--/***********COMO PENSAMOS***********/-->
        <section id="como_pensamos">
            <article class="ilustracion" data-stellar-offset-parent="true">
                <div class="contenedor" data-stellar-horizontal-offset="90">
                    <img src="img/como_pensamos_1.png" data-stellar-ratio="3"/>
                    <img src="img/como_pensamos_2.png" data-stellar-ratio="2"/>
                    <img src="img/como_pensamos_3.png" data-stellar-ratio="1"/>
                    <img src="img/como_pensamos_4.png" data-stellar-ratio="3"/>
                    <img src="img/como_pensamos_5.png" data-stellar-ratio="2"/>
                </div>
            </article>
            <article class="info_seccion">
                <h2><span>Cómo</span><br/> pensamos</h2>
                <div id="como_pensamos_cuadro">
                    <div id="contenedor_como_pensamos">
                        <div class="separador"></div>
                        <div id="como_pensamos_texto">
                            <p>Las cosas más grandes tienen los orígenes más simples.</p>
                            <p>Así como una sucesión de puntos forma una línea y una sucesión de líneas da origen a las formas, una simple idea se convierte en un gran cambio para una marca.</p>
                            <p>Partimos de lo básico y no lo soltamos hasta convertirlo en algo mucho más grande y ni aún así lo soltamos.</p>
                            <p>Partimos de un pequeño punto gris y lo convertimos en resultados.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!--/*************CLIENTES**************/-->
        <section id="clientes">
            <article class="ilustracion" data-stellar-offset-parent="true">
                <div class="contenedor" data-stellar-horizontal-offset="90">
                    <img src="img/clientes_1.png" data-stellar-ratio="3"/>
                    <img src="img/clientes_2.png" data-stellar-ratio="2"/>
                    <img src="img/clientes_3.png" data-stellar-ratio="2"/>
                    <img src="img/clientes_4.png" data-stellar-ratio="1"/>
                    <img src="img/clientes_5.png" data-stellar-ratio="2"/>
                    <img src="img/clientes_6.png" data-stellar-ratio="3"/>
                    <img src="img/clientes_7.png" data-stellar-ratio="2"/>
                </div>
            </article>
            <article class="info_seccion">
                <h2>Clientes</h2>
                <div id="clientes_cuadro">
                    <div id="contenedor_clientes">
                        <div class="separador"></div>
                        <div id="clientes_lista">
                            <img src="img/clientes_logo_sanborns.png" alt="Nuestros Clientes: Sanborns" />
                            <img src="img/clientes_logo_bx+.png" alt="Nuestros Clientes: Ve Por Más" />
                            <img src="img/clientes_logo_philips.png" alt="Nuestros Clientes: Philips" />
                            <img src="img/clientes_logo_pepsi.png" alt="Nuestros Clientes: Pepsi" />
                            <img src="img/clientes_logo_samsung.png" alt="Nuestros Clientes: Samsung" />
                            <img src="img/clientes_logo_swatch_group.png" alt="Nuestros Clientes: Swatch Group" />
                            <img src="img/clientes_logo_fujifilm.png" alt="Nuestros Clientes: Fujifilm" />
                            <img src="img/clientes_logo_minsa.png" alt="Nuestros Clientes: Minsa" />
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!--/**********NUESTRO TRABAJO**********/-->
        <section id="nuestro_trabajo">
            <article class="ilustracion" data-stellar-offset-parent="true">
                <div class="contenedor" data-stellar-horizontal-offset="90">
                    <img src="img/nuestro_trabajo_1.png" data-stellar-ratio="3"/>
                    <img src="img/nuestro_trabajo_2.png" data-stellar-ratio="2"/>
                    <img src="img/nuestro_trabajo_3.png" data-stellar-ratio="1"/>
                    <img src="img/nuestro_trabajo_4.png" data-stellar-ratio="4"/>
                    <img src="img/nuestro_trabajo_5.png" data-stellar-ratio="2"/>
                </div>
            </article>
            <article class="info_seccion">
                <h2><span>Nuestro</span><br/>trabajo</h2>
                <table class="tabla_galeria">
                    <tr>
                      <td>Print</td>
                      <td class="boton_mas"><a id="nuestro_trabajo_print" href="javascript:;"></a></td>
                    </tr>
                    <tr>
                      <td>TV</td>
                      <td class="boton_mas"><a id="nuestro_trabajo_tv" class="fancybox-media" href="//www.youtube.com/embed/pyMTSr8hbow"></a></td>
                    </tr>
                    <tr>
                      <td>Radio</td>
                      <td class="boton_mas"><a id="nuestro_trabajo_radio" href="javascript:;"></a></td>
                    </tr>
                </table>
            </article>
        </section>

        <!--/**********FOTOGRAFÍA**********/-->
        <section id="fotografia">
            <article class="ilustracion" data-stellar-offset-parent="true">
                <div class="contenedor" data-stellar-horizontal-offset="90">
                    <img src="img/fotografia_1.png" data-stellar-ratio="6"/>
                    <img src="img/fotografia_2.png" data-stellar-ratio="3"/>
                    <img src="img/fotografia_3.png" data-stellar-ratio="5"/>
                    <img src="img/fotografia_4.png" data-stellar-ratio="1"/>
                    <img src="img/fotografia_5.png" data-stellar-ratio="2"/>
                    <img src="img/fotografia_6.png" data-stellar-ratio="4"/>
                </div> 
            </article>

            <article class="info_seccion">
                <h2>Fotografía</h2>
                <table class="tabla_galeria">
                    <tr>
                      <td>Ver trabajo</td>
                      <td class="boton_mas"><a id="fotografia_galeria" href="javascript:;"></a></td>
                    </tr>
                </table>
            </article>         
        </section>

        <!--/**********STAND**********/-->
        <section id="stand">
            <article class="ilustracion" data-stellar-offset-parent="true">
                <div class="contenedor" data-stellar-horizontal-offset="90">
                    <img src="img/stands_1.png" data-stellar-ratio="6"/>
                    <img src="img/stands_2.png" data-stellar-ratio="3"/>
                    <img src="img/stands_3.png" data-stellar-ratio="5"/>
                    <img src="img/stands_4.png" data-stellar-ratio="1"/>
                    <img src="img/stands_5.png" data-stellar-ratio="2"/>
                    <img src="img/stands_6.png" data-stellar-ratio="4"/>
                </div> 
            </article>
            <article class="info_seccion">
                <h2><span>Stand /</span><br/> Pop</h2>
                <table class="tabla_galeria">
                    <tr>
                      <td>Ver trabajo</td>
                      <td class="boton_mas"><a id="fotografia_stand" href="javascript:;"></a></td>
                    </tr>
                </table>
            </article>          
        </section>

        <!--/**********CONTACTO**********/-->
        <section id="contacto">
            <article class="ilustracion" data-stellar-offset-parent="true">
                <div class="contenedor" data-stellar-horizontal-offset="90">
                    <img src="img/contacto_1.png" data-stellar-ratio="6"/>
                    <img src="img/contacto_2.png" data-stellar-ratio="3"/>
                    <img src="img/contacto_3.png" data-stellar-ratio="5"/>
                    <img src="img/contacto_4.png" data-stellar-ratio="2.5"/>
                    <img src="img/contacto_5.png" data-stellar-ratio="2"/>
                    <img src="img/contacto_6.png" data-stellar-ratio="1"/>
                    <img src="img/contacto_7.png" data-stellar-ratio="4"/>
                    <img src="img/contacto_8.png" data-stellar-ratio="2"/>
                </div> 
            </article>
            <article class="info_seccion">
                <h2>Contacto</h2>
                <form action="accion_contacto.php" id="formulario" method="post" accept-charset="UTF-8">
                	<div class="QapTcha"></div>
                    <label for="nombre">Nombre <span>(obligatorio)</span></label>
                    <input type="text" name="nombre" id="nombre" class="validate[required] text-input"/>
                    <label for="nombre">Email <span>(obligatorio)</span></label>
                    <input type="text" name="email" class="validate[required,custom[email]]"/>
                    <label for="nombre">Teléfono</label>
                    <input type="text" name="telefono" maxlength="15" class="validate[maxSize[15]]"/>
                    <label for="nombre">Tu mensaje</label>
                    <textarea id="mensaje" name="mensaje"></textarea>
                    <input type="submit" value="Enviar" />
                </form>
                <article id="datos_empresa">
                    <p>Circuito Dramaturgos #34<br/>
                    Col. Ciudad Satélite,<br/>
                    Naucalpan, Edo. de México.<br/>
                    C.P. 53100.</p>
                    <p><strong>Teléfono:</strong> +52 55 2628 21 75</p> 
                    <p><strong>Correo:</strong><a href=""> info@grey-dot.com</a></p>
                </article>
            </article>
        </section>
        <!--/**JAVASCRIPT**/-->
        <script src="js/vendor/jquery.js"></script>
        <script src="js/vendor/jquery-ui.js"></script>
		<script src="js/vendor/jquery.ui.touch.js"></script>
        <script src="js/vendor/jquery.easing.1.3.js"></script>
        <script src="js/vendor/jquery.stellar.js"></script>
        <script src="js/vendor/waypoints.min.js"></script>
        <script src="js/vendor/jquery.fancybox.js"></script>
        <script src="js/vendor/jquery.fancybox-thumbs.js"></script>
        <script src="js/vendor/jquery.fancybox-media.js"></script>
        <script src="js/vendor/jquery.nanoscroller.js"></script>
        <script src="js/vendor/QapTcha.jquery.js"></script>
        <script src="js/vendor/jquery.validationEngine-es.js"></script>
        <script src="js/vendor/jquery.validationEngine.js"></script>
        <script src="js/js.js"></script>
    </body>
</html>