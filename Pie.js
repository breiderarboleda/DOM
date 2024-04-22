const crearPieDePagina = () => {
    const pieDePagina = document.createElement("footer");
    pieDePagina.classList.add("pie-de-pagina");
    
    const contenido = document.createElement("p");
    contenido.textContent = "© 2024 Breider Arboleda.";
    
    pieDePagina.appendChild(contenido);
    
    return pieDePagina;
};

var css = `
.pie-de-pagina {
    background-color: #007bff;
    color: #fff;
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
`;

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
document.head.appendChild(style);
