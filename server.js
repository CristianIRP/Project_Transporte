const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Configura tu plantilla y usuario de Email.js
    const emailjsParams = {
        service_id: 'tu_service_id',
        template_id: 'tu_template_id',
        user_id: 'tu_user_id',
        template_params: {
            'nombre': nombre,
            'email': email,
            'mensaje': mensaje
        }
    };

    // Envía el correo electrónico
    emailjs.send(emailjsParams.service_id, emailjsParams.template_id, emailjsParams.template_params, emailjsParams.user_id)
        .then(function (response) {
            console.log('Correo electrónico enviado:', response);
            res.send('Correo electrónico enviado con éxito');
        }, function (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).send('Error al enviar el correo electrónico');
        });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
