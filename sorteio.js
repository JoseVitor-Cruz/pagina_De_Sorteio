function sortear(){

    let numeroMaxDesejado = document.getElementById("numeroMaxDesejado").value;
    let valorSorteado = Math.round(Math.random() * numeroMaxDesejado)
    document.getElementById("valorSorteado").innerHTML = valorSorteado
}