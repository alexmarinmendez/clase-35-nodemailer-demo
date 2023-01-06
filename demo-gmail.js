const nodemailer = require('nodemailer')

const TEST_MAIL = 'alexmarinmendez@gmail.com'

const transporter = nodemailer.createTransport({
   service: 'gmail',
   port: 587,
   auth: {
       user: TEST_MAIL,
       pass: 'fytrebseksqgwtjn'
   }
});

const mailOptions = {
    from: TEST_MAIL,
    to: ['jonasans2@live.com.ar', 'eunice.considine@ethereal.email'],
    subject: 'Prueba en vivo # 3 (ver adjunto)',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [{
      path: "leo.jpg"
    }]
 }
 
 transporter.sendMail(mailOptions)
    .then(info => console.log(info))
    .catch(err => console.log(err))