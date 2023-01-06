const nodemailer = require('nodemailer')

const TEST_MAIL = 'eunice.considine@ethereal.email'

const transporter = nodemailer.createTransport({
   host: 'smtp.ethereal.email',
   port: 587,
   auth: {
       user: TEST_MAIL,
       pass: 'utcyfWhQQQfUgQX1Ba'
   }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'alexmarinmendez@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
 }
 
 transporter.sendMail(mailOptions)
    .then(info => console.log(info))
    .catch(err => console.log(err))