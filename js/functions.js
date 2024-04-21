function sumar() {
    alert("Hola mundo");
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log("Numero 1: " + num1 + " Numero 2: " + num2);
    var suma = Number(num1) + Number(num2);
    console.log("La suma es: " + suma);

    document.getElementById("resultado").innerHTML = "La suma es: " + "Hola Mundo";
}


