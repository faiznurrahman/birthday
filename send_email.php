<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input from the form
    $user_input = htmlspecialchars($_POST['user_input']);

    // Set the recipient email address
    $to = "faiznurrahman842@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New Wish Submission";

    // Set the email message
    $message = "You have received a new wish:\n\n" . $user_input;

    // Set the email headers
    $headers = "From: no-reply@example.com"; // You can change the "From" address

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your wish has been submitted.";
    } else {
        echo "Sorry, there was an error submitting your wish. Please try again.";
    }
}
?>
