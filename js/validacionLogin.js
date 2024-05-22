// Cargar DOM
document.addEventListener("DOMContentLoaded", function () {

    const correo = document.getElementById('[name="correo"]');
    const clave = document.getElementById('[name="passwordLogin"]');
    const warnings = document.getElementById('errores');

    const formularioLogin = document.getElementById('loginForm');

    formularioLogin.addEventListener('submit', function (e) {
        e.preventDefault();
        let warnings = '';
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // Validar correo
        if (!regexEmail.test(correo.value)) {
            document.getElementById('errores').innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Correo no debe estar vacio</div>";
            correo.style.border = '1px solid red';
            console.log("Deberia aparecer un error")
        }
    });

});