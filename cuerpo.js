const crearPerfil = (nombre, edad, ocupacion, descripcion, fotoURL) => {
    const perfil = document.createElement("div");
    perfil.classList.add("perfil");

    const fotoElement = document.createElement("img");
    fotoElement.src = fotoURL; 
    fotoElement.alt = nombre; 
    perfil.appendChild(fotoElement);

    const nombreElement = document.createElement("h2");
    nombreElement.textContent = nombre;

    const detalleElement = document.createElement("p");
    detalleElement.innerHTML = `<strong>Edad:</strong> ${edad} años<br>
                                <strong>Ocupación:</strong> ${ocupacion}<br>
                                <strong>Descripción:</strong> ${descripcion}`;

    perfil.appendChild(nombreElement);
    perfil.appendChild(detalleElement);

    return perfil;
};

var css = `
.perfil {
    background-color: #007bff;
    border-radius: 15px; 
    padding: 20px;
    margin: 0 auto 20px auto; 
    max-width: 400px; 
    text-align: center; 
    margin-top: 0px;
}

.perfil img {
    width: 100px;
    border-radius: 50%; 
    margin-bottom: 10px; 
    border: 4px solid #fff; 
}

.perfil h2 {
    margin-top: 0;
    color: #fff; 
}

.perfil p {
    margin-bottom: 0;
    color: #fff; 
}
`

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
document.head.appendChild(style);
