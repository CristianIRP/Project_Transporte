document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            // Puedes agregar lógica adicional aquí si es necesario
        })
        .catch(error => {
            console.error(error);
            // Puedes manejar el error según tus necesidades
        });
    });
});

