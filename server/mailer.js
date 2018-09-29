exports.handler = function(event, context, callback) {
  const nodemailer = require('nodemailer')
  const smtpTransport = require('nodemailer-smtp-transport')

  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.stackmail.com',
      port: 587,
      secure: false, // Activate TLS/STARTTLS
      auth: {
        user: process.env.secretAddress,
        pass: process.env.secretPassword,
      },
    })
  )

  transporter.verify(function(error, success) {
    if (error) {
      console.log('setup error', error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })
  const requestBody = JSON.parse(event.body)
  const { name, email, message } = requestBody

  const mailOptions = {
    from: email,
    to: 'mail@msweeneydev.com',
    subject: `Message from ${name}`,
    text: message,
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      }
      callback(null, response)
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email sent succesfully!`,
      }),
    }
    callback(null, response)
  })
}
