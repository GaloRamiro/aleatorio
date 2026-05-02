function generarAleatorio() {
  let arregloAleatorio = [];
  let valorIngresado = recuperarInt("txtCantidad");
  if (isNaN(valorIngresado)) {
    alert("Ingrese un número válido"); // validación
    return;
  }
  if (valorIngresado < 5 || valorIngresado > 20) {
    alert("El numero ingresado debe estar entre 5 y 20");
    return;
  }
  for (let i = 0; i < valorIngresado; i++) {
    let valorAleatorio = obtenerAleatorio();
    arregloAleatorio.push(valorAleatorio);
  }
  mostrarResultados(arregloAleatorio);
  limpiarValor();
}

function mostrarResultados(arregloNumeros) {
    let divResultados = document.getElementById("zonaResultados");
let contenidoTabla ="<table>";
contenidoTabla+= "<tr><th>Índice</th><th>Número Aleatorio</th></tr>";
for (let i =0; i < arregloNumeros.length; i++){
    contenidoTabla += "<tr>";
    contenidoTabla += "<td>" +i+ "</td>";
    contenidoTabla += "<td>" + arregloNumeros[i] + "</td>";
    contenidoTabla += "</tr>";
}
contenidoTabla += "</table>";
divResultados.innerHTML=contenidoTabla;
}

function limpiarValor(){
    document.getElementById("txtCantidad").value = "";
}