// cerrar llave de jquery

$(document).ready(function() {

    $("btnEnviar").click(function() {
        $("#formularioContacto").submit();
    });








    function validarDatos(rut,nombre,appaterno,appmaterno,correo,telefono,comentario)
           if (String(rut).length == 0 || String(rut).length > 10) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El rut no puede estar vacío o tener menos de 10 caracteres</div>");
            
           } else if (String(nombre).length == 0 || String(nombre).length > 50) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El nombre no puede estar vacío o tener más de 50 caracteres</div>");
            
           } else if (String(appaterno).length == 0 || String(appaterno).length > 50) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El apellido paterno no puede estar vacío o tener más de 50 caracteres</div>");
            
           } else if (String(appmaterno).length == 0 || String(appmaterno).length > 50) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El apellido materno no puede estar vacío o tener más de 50 caracteres</div>");
            
           } else if (String(correo).length == 0 || String(correo).length > 50) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El correo no puede estar vacío o tener más de 50 caracteres</div>");
            
           } else if (String(telefono).length == 0 || String(telefono).length > 50) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El teléfono no puede estar vacío o tener más de 50 caracteres</div>");
            
           } else if (String(comentario).length == 0 || String(comentario).length > 50) {
            ("check").html("div class= 'alert alert-danger w-50 mx-auto text-center'>El comentario no puede estar vacío o tener más de 50 caracteres</div>");
            
           } else {
            ("check").html("div class= 'alert alert-success w-50 mx-auto text-center'>Datos enviados correctamente</div>");
           }




});