var sesAccessKey = process.env.secretAddress
var sesSecretKey = process.env.secretPassword

exports.handler = function(event, context, callback) {
  var nodemailer = require('nodemailer')
  var smtpTransport = require('nodemailer-smtp-transport')

  var transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.stackmail.com',
      port: 587,
      secure: false, // Activate TLS/STARTTLS
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey,
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
  // const requestBody = JSON.parse(event.body)
  // const emailBody = requestBody.text;
  var text = 'Email body goes here'

  var mailOptions = {
    from: 'noreply@msweeneydev.com',
    to: 'mail@msweeneydev.com',
    subject: 'Test subject',
    text: text,
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('BIG ERROR!')
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: 'REALLY BIG ERROR!',
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
