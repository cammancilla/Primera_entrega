const rut = document.getElementById('txtRut');
const nombre = document.getElementById('txtNombre');
const apellidoPaterno = document.getElementById('txtAppaterno');
const apellidoMaterno = document.getElementById('txtApmaterno');
const correo = document.getElementById('txtMail');
const telefono = document.getElementById('txtTelefono');
const comentario = document.getElementById('txtComentario');
const parrafo = document.getElementById('warnings');


const form = document.getElementById('#formularioContacto');

form.addEventListener('submit', e => {
    e.preventDefault();
    let warnings = '';
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (rut.value.length < 9) {
        warnings += 'El rut no es válido <br>';
    }
    if (nombre.value.length < 3) {
        warnings += 'El nombre debe ser mayor A 3 <br>';
    }
})


