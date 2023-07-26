<?php
// Replace the values in these variables with your own
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "com";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Retrieve user data from database
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $hashed_password = $row['password'];

  // Verify password
  if (password_verify($password, $hashed_password)) {
    // Login successful
    session_start();
    $_SESSION['username'] = $username;
    header("Location: CRM.dashboard.html");
    exit();
  } else {
    // Login failed
    echo "Invalid username or password";
  }
} else {
  // Login failed
  echo "Invalid username or password";
}

$conn->close();
?>