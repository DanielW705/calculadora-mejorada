const mostrar = document.getElementById("resultados");
const boton = document.querySelector("button");
let cont = 0;
const getData = () => {
    cont = localStorage.getItem("contador");
    for (let i = 0; i < cont; i++) {
        const div = document.createElement("div");
        const name = `operacion ${cont}`;
        const html = localStorage.getItem(`operacion ${i}`);
        div.setAttribute("div-number", name)

        console.log();
    }
}
const setData = (datos) => {
    const datosAsubir = localStorage.setItem("DatosEscritos", datos);
}
const guardarHeaders = () => {
    let headers = new Headers()
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return headers;
}
const obtenerDatos = () => {
    return JSON.stringify({
        nm1: Number.parseFloat(document.getElementById("num1").value),
        nm2: Number.parseFloat(document.getElementById("num2").value),
        sel: document.getElementById("selector").value
    });
}
const crearDiv = (resultado) => {
    const div = document.createElement("div");
    const name = `operacion ${cont}`;
    div.innerHTML = resultado;
    div.setAttribute("div-number", name)
    mostrar.appendChild(div);
    i++;
    localStorage.setItem("contador", cont);
    localStorage.setItem(name, div.innerHTML);
}
const subirdatos = () => {
    fetch(url, {
        method: "POST",
        headers: guardarHeaders(),
        body: obtenerDatos(),
        redirect: 'follow'
    }).then(response => {
        response.text().then(result => {
            crearDiv(result);
        });
    });
}
boton.addEventListener('click', () =>
    subirdatos(), false)
//window.addEventListener('load', () => getData(), false)
