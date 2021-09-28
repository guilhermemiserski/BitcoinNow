"use strict";

function fazerGet(){
let request = new XMLHttpRequest();
request.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl", false);
request.send();
const valor = JSON.parse(request.response);
document.getElementById("bitcoin").innerHTML += valor.bitcoin.brl;
}

fazerGet();
