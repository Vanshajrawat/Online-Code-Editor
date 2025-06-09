<?php
$conn = new mysqli("localhost", "root", "", "codeeditor");
if ($conn->connect_error) die("Connection failed");

$username = $_POST['username'];
$html = $_POST['html'];
$css = $_POST['css'];
$js = $_POST['js'];

$sql = "INSERT INTO code_snippets (username, html, css, js) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $username, $html, $css, $js);
$stmt->execute();
echo "Saved successfully.";
?>
