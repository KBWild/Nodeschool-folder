<?php

if($_POST['submit']) {
include("HTML_webpage.html");

	$name= $_FILES['upload']['name']; //'upload' is within the photo_album.html //  <input type='file' name='upload'>
	$temp= $_FILES['upload']['tmp_name'];
	$type= $_FILES['upload']['type'];
	$size= $_FILES['upload']['size'];

	//echo "$name<br>$temp<br>$type<br>$size";//This outputs the name of file,temp_name,type of file & size of file.
	if(($type == "image/jpeg")||($type == "image/jpg")||($type == "image/gif")){
	
	if($size <= 100000){
	
	echo "The file: $name size is $size";


	}else{

	echo "The file $name is too big...<br>
	The size is $size and needs to be less than 100kb@;

	}
	echo "The file type $type is allowed";
	
	}
	else{

	echo "This type $type is not allowed";

	}

}
else{

header("Location:HTML_webpage.html");

}



?>