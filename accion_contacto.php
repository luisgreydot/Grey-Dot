<?php

	$method = strtolower($_SERVER['REQUEST_METHOD']);
	switch($method)
	{
		case 'get':
			$CONTEXT =& $_GET;
			break;
		case 'post':
			$CONTEXT =& $_POST;
			break;
		default:
			$CONTEXT = array();
			break;
	}
	
	$nombre 		 = isset($CONTEXT['nombre'])	    	?	htmlentities($CONTEXT['nombre']) : "";  
	$email	         = isset($CONTEXT['email'])	    		? 	htmlentities($CONTEXT['email']) : "";
	$telefono	     = isset($CONTEXT['telefono'])	    	? 	htmlentities($CONTEXT['telefono']) : "";
	$mensaje	     = isset($CONTEXT['mensaje'])	    	? 	htmlentities($CONTEXT['mensaje']) : "";
	

// definimos las variables o marcamos el error
if( $nombre=='' || $email=='') {
	echo "<script>alert('Debes de llenar los campos que se te indican'); document.location='index.html#contacto';</script>";
	}
else 

{
			$de = "luis@grey-dot.com";
			$headers = "From: Membranas la Marina <".$de.">\r\n";
		    $headers .= "Reply-To: ".$correo."\r\n";
			$headers .= "Bcc: luis@grey-dot.com\r\n";		
		   	$headers .= "Content-type: text/html; charset=utf-8\r\n";			
			$asunto = "Recibiste Un Mensaje Desde Tu Sitio Grey Dot";
			
			$html='De:  '.$nombre.' <br />
				   Correo Electrónico: '.$email.'<br/>
				   Teéfono: '.$telefono.' <br />
				   Mensaje: '.$mensaje.' <br />
				   ';
			if (mail($destino,$asunto,$html,$headers)!=FALSE)
			{
				echo "<script>alert('Tu Mensaje a sido recibido. En breve nos comunicaremos con ustedes'); document.location='index.html#contacto';</script>";
				
			}
			else {
				echo "<script>alert('Se ha producido un error. Inténtalo más tarde.'); document.location='index.html#contacto';</script>";
		}
}
?>