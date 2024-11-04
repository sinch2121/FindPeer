const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhijeetsalimath98@gmail.com', // Your Gmail email address
    pass: 'Abhi@1998' // Your Gmail password or application-specific password
  }
});

// Function to send an email
async function sendEmail(to, subject, message) {
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'abhijeetsalimath98@gmail.com', // Your Gmail email address
      to: to, // Recipient's email address
      subject: subject, // Subject line
      text: message // Plain text body
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Example usage (to be called from your application logic)
const userEnteredEmail = 'sinchanasalimath21@gmail.com'; // Replace with the recipient's email address
const subject = 'Logged in successfully!'; // Replace with the subject of your email
const message = 'You have successfully logged in FindPeer'; // Replace with the body of your email

// Call the sendEmail function with the recipient's email address, subject, and message
sendEmail(userEnteredEmail, subject, message);

// Export the sendEmail function to be used in other modules
module.exports = sendEmail;
