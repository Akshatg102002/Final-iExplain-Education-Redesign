<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = isset($data['name']) ? $data['name'] : '';
    $email = isset($data['email']) ? $data['email'] : '';
    $phone = isset($data['phone']) ? $data['phone'] : '';
    $city = isset($data['city']) ? $data['city'] : '';
    $category = isset($data['category']) ? $data['category'] : '';
    $course = isset($data['course']) ? $data['course'] : '';
    $targetCountry = isset($data['targetCountry']) ? $data['targetCountry'] : '';
    $source = isset($data['source']) ? $data['source'] : 'Website Contact Form';
    
    $to = "iexplaineducation.online@gmail.com";
    $subject = "New Lead: $name - $category";
    
    $message = "
    <html>
    <head>
    <title>New Lead</title>
    </head>
    <body>
    <h2>New Lead from $source</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    " . ($city ? "<p><strong>City:</strong> $city</p>" : "") . "
    <p><strong>Category:</strong> $category</p>
    <p><strong>Course:</strong> $course</p>
    <p><strong>Target Country:</strong> $targetCountry</p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
