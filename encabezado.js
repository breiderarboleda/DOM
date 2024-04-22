const crearEncabezadoConEstilos = (texto) => {
    const encabezado = document.createElement("h1");
    encabezado.textContent = texto;
    encabezado.style.color = "#007bff";
    encabezado.style.fontSize = "24px";
    encabezado.style.marginBottom = "20px";
    encabezado.style.textAlign = "center";
    encabezado.style.marginTop = "120px";
    return encabezado;
};

var css = `
.encabezado {
    color:  #007bff; 
    font-size: 24px; 
    margin-bottom: 20px; 
    text-align: center; 
    margin-top: 120px;
}
`;

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(style);
