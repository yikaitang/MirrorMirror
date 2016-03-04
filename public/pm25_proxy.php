<?php
//if (isset($_POST)) {

	//$url = "http://www.pm25.in/api/querys/pm2_5.json?city=shanghai&token=5j1znBVAsnSf5xQyNQyq";
  	$url = 'http://api.lib360.net/open/pm2.5.json?city=%E4%B8%8A%E6%B5%B7';

	echo json_encode(file_get_contents($url));
// }
?>
