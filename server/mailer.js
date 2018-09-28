var sesAccessKey = process.env.secretAddress
var sesSecretKey = process.env.secretPassword

exports.handler = function(event, context, callback) {
  var nodemailer = require('nodemailer')
  var smtpTransport = require('nodemailer-smtp-transport')

  var transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // Activate TLS/STARTTLS
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey,
      },
    })
  )
  const requestBody = JSON.parse(event.body)
  const emailBody = requestBody.text
  console.log(emailBody)
  var text = 'Email body goes here'

  var mailOptions = {
    from: 'noreply@msweeneydev.com',
    to: 'mail@msweeneydev.com',
    // bcc: '<bcc email addres>',
    subject: 'Test subject',
    text: text,
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
        message: `Email processed succesfully!`,
      }),
    }
    callback(null, response)
  })
}
