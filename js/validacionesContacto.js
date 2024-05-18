document.addEventListener("DOMContentLoaded", function () {
    const rut = document.querySelector('[name="txtRut"]');
    const nombre = document.querySelector('[name="txtNombre"]');
    const apellidoPaterno = document.querySelector('[name="txtApellido"]');
    const email = document.querySelector('[name="txtMail"]');
    const telefono = document.querySelector('[name="txtTelefono"]');
    const mensaje = document.querySelector('[name="txtComentario"]');
    const validateEmptyField = (e) => {
        const field = e.target;
        const fieldValue = e.target.value;
        if (fieldValue.trim().length <= 0) {
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Este campo es obligatorio";

        } else {
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
        }
    };

    const validateEmail = (e) => {
        const field = e.target;
        const fieldValue = e.target.value;
        const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Introduzca un correo valido";

        } else {
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
        }
    };

    rut.addEventListener("blur", validateEmptyField);
    nombre.addEventListener("blur", validateEmptyField);
    apellidoPaterno.addEventListener("blur", validateEmptyField);

    email.addEventListener("blur", validateEmptyField);
    email.addEventListener("input", validateEmail);
    telefono.addEventListener("blur", validateEmptyField);
    mensaje.addEventListener("blur", validateEmptyField);

});
