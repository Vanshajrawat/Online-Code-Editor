<?php
$conn = new mysqli("localhost", "root", "", "codeeditor");
if ($conn->connect_error) die("Connection failed");

$username = $_GET['username'];
$result = $conn->query("SELECT * FROM code_snippets WHERE username='$username' ORDER BY created_at DESC LIMIT 1");

$row = $result->fetch_assoc();
echo json_encode([
  "html" => $row["html"],
  "css" => $row["css"],
  "js" => $row["js"]
]);
?>
