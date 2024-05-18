const rut = document.querySelector('[name="txtRut"]');
const nombre = document.querySelector('[name="txtNombre"]');
const apellidoPaterno = document.querySelector('[name="txtAppaterno"]');
const apellidoMaterno = document.querySelector('[name="txtApmaterno"]');
const email = document.querySelector('[name="txtMail"]');
const telefono = document.querySelector('[name="txtTelefono"]');
const mensaje = document.querySelector('[name="txtComentario"]');


rut.addEventListener("blur", function (e) {
    const fieldValue = e.target.value;
    if (fieldValue.value <= 0) {
        console.log("Rut no puede estar vacio");
    }
});