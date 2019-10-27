<?php
	//header('Content-type:image/jpeg');
	//header('Location:wa.jpeg');
	
	extract($_GET);
	if($uname=="USER1"||$uname=="USER2"||$uname=="USER3"){
		/*the imagecreate() function with the dimensions of the image, namely its width and height in that order. This function returns a resource identifier for the image*/
		$im=imagecreate(1,1);
		/*Before you can use any sort of colours in your image at all, you will need to allocate them. Colours are represented by three digits, known as the RGB value. The first digit denotes the red component, the second the green and the third blue, hence RGB, for Red-Green-Blue. These are the same colour values that you use for your web page as well as numerous other computer applications.
		Colours are allocated using the imagecolorallocate() function. This function will automatically fill the background of the image with the colour the first time you call it, as well as return an identifier for that particular colour. Subsequent calls to imagecolorallocate() will simply create a colour identifier for your colour, without affecting your image background.*/
		imagecolorallocate($im,255,255,255);
	}
	else{
		$im=imagecreate(2,2);
		imagecolorallocate($im,255,255,255);
		
	}
	//Sends jpeg image to browser or file
	imagejpeg($im);
	//imagedestroy($im);
?>