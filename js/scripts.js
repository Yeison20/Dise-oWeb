/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargarAleatorios() {

    var xhr = new XMLHttpRequest();

    var boton = document.getElementById("btnCarga").disabled = true;
    
    alert("Comenzo el proceso de carga, espere un momento");

    var mesSelect = document.getElementById("mesesCarga");
    var mes = mesSelect.value;

    var opcion = 1;

    var sendAux = "mes=" + mes + "&opcion=" + opcion; //name=Apolo&pass=123

    xhr.open("POST", "ServTransmilenio", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
            var boton = document.getElementById("btnCarga").disabled = false;
        }
    };

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(sendAux);

}

function usoAleatorios() {

    var xhr = new XMLHttpRequest();

    var boton = document.getElementById("btnUso").disabled = true;
    
    alert("Comenzo el proceso de carga, espere un momento");

    var mesSelect = document.getElementById("mesesUso");
    var mes = mesSelect.value;

    var opcion = 2;

    var sendAux = "mes=" + mes + "&opcion=" + opcion; //name=Apolo&pass=123

    xhr.open("POST", "ServTransmilenio", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
            var boton = document.getElementById("btnUso").disabled = false;
        }
    };

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(sendAux);

}
