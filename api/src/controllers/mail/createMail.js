const nodeMailer = require("nodemailer");

const createMail = async (name, emailRecibe, message, emailEscribe, subject) => {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Configurar el contenido del correo electrónico
  let mailMsg = {
    from: process.env.EMAIL,
    to: emailRecibe,
    subject: subject,
    html: `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f7f7f7;
        }

        
        p {
            margin-bottom: 10px;
        }
        
        .message {
            font-weight: bold;
            margin-top: 20px;
        }
        
        .banner {
          max-width: 600px;
          margin: 0 auto;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color:  rgb(48, 162, 238);
        }
        .datos {
            max-width: 600px;
          margin: 0 auto;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: white;

        }
        .titulo {
            font-family: Helvetica, sans-serif;
            color:white
        }

      </style>
    </head>
    <body>
      <div class="container">
        <div class="banner">
            <h1 class="titulo">CONSUMEDIC</h1>
        </div>
        <p>Hola soy ${name}!</p>
        <p>Te contacto desde la plataforma de Consumedic</p>
        <p>Para consultarte lo siguiente:</p>
        <div class="datos">
            <p class="message">${message}</p>
        </div>
        <p>Podrás responderme a: ${emailEscribe}.</p>
      </div>
    </body>
  </html>
  `,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailMsg, (error, info) => {
    if (error) {
      throw new Error("Error al enviar el correo electrónico");
    } else {
      throw new Error("Correo electrónico enviado: " + info.response);
    }
  });
};

module.exports = { createMail };
