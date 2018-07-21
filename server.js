// server.js

var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer');
var nodemailer = require('nodemailer');

var app = express();
var port = 3000;

app.listen(port, function(req, res){
  console.log('Server is running at port: ',port);
});


var transporter = nodemailer.createTransport({
    host      : 'posteo.de',
    port      : 587,
    ignoreTLS: false,
    tls :{rejectUnauthorized: false},
    secure :false,
    auth: {
        user: 'jennifer.meyer@posteo.de',
        pass: "2Snowflakes",
    }
});

var mailOptions = {
  from: 'jennifer.meyer@posteo.de',
  to: 'jennifer.meyer@posteo.de',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
