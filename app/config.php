<?php
   if(isset($_POST['userName'], $_POST['userEmail'], $_POST['message'])) {
      print_r($_POST);
    }

  $connection = mysqli_connect ('localhost', 'root', '', 'contact');

  if($connection) {
    echo "We are connected";
  }
  else {
    die("Database connected failed");
  }

?>