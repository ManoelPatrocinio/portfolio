const express    = require('express');
const nodemailer = require("nodemailer");
const app        = express();
require("dotenv").config();



// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req,res)=>{
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
       
    })

    const mailContent ={
        from: req.body.email,
        to: "johnmoura4744@gmail.com",
        subject: `Contato Inicial | ${req.body.email}`,
        text: req.body.mensagem
    }
    console.log("dados do  content",mailContent);
    transport.sendMail(mailContent,(error,info)=>{
        if (error) {
            console.log(error);
            res.send('Erro no envio do email');
        }else{
            console.log('Email enviado');
            res.send('success')
        }
    })
})

app.listen(process.env.PORT , () => {
  console.log("server running");
});