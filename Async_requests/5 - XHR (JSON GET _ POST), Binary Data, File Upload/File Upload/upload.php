 <?php

	extract($_POST);
	/*$_FILES is a two dimensional associative global array of items which are being uploaded by via HTTP POST method and holds the attributes of files.The array looks as given below:
	$_FILES[input-field-name][name]

	$_FILES[input-field-name][tmp_name]	

	$_FILES[input-field-name][size]

	$_FILES[input-field-name][type]

	$_FILES[input-field-name][error]	
	$_FILES['file']['tmp_name']; will contain the temporary file name of the file on the server. This is just a placeholder on your server until you process the file

$_FILES['file']['name']; contains the original name of the uploaded file from the user's computer.*/
	$fname=$_FILES['f']['name'];
	$fsize=$_FILES['f']['size'];
	$ftemp=$_FILES['f']['tmp_name'];
	if(move_uploaded_file($ftemp,$fname))
	echo $fname ."saved successfully";

	else
		echo "failed";


?>