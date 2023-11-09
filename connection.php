<?php
$servername = "localhost";
$username = "id21347741_reeder";
$password = "Bilibus.1";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

include(" signup.php ");
?>