document.addEventListener("DOMContentLoaded", function() {

    var encabezado = crearEncabezadoConEstilos("¡Bienvenido a mi perfil!");

    var contenido = document.getElementById("contenido");
    contenido.insertBefore(encabezado, contenido.firstChild);

var perfilEjemplo = crearPerfil("Breider Arboleda", 20, "Estudiante", "Tecnologia en Desarrollo de Software", "./IMG/Foto.jpg");

document.body.appendChild(perfilEjemplo);


});



