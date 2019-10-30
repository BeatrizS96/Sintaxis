"use strict";

// Variable global donde iremos guardando los enteros recogidos.
 var ARRAY = [];

 // Limpia formulario y elemento donde se muestra el resultado
 function cleanData (){
  document.getElementById("num").value = "" ;
 }

 function addNumber (elem) {
 	var num = parseInt (elem.value);
 	var resultado = document.getElementById ("resultado");

 	if (isNaN(num)) { //Si el valor no es un entero se genera un error.
 		resultado.style.color = "red";
 		resultado.innerHTML = "Debes introducir un entero";
 	} else {
 		// Si el valor es un número y no hemos llegado al final guardamos el dato
	 	if (num !== 0 && ARRAY.length < 5) {
	 		ARRAY.push(parseInt(num));
	 		resultado.style.color = "white";
	 		resultado.innerHTML = ARRAY;
	 	}

	 	if (num === 0 || ARRAY.length === 5) { // Si hemos llegado al final se desactiva el botón y se calcula los repetidos.
	 		elem.disabled = true;
	 		document.getElementById("addButton").disabled = true;
	 		let values = isThereRepeted ();
	 		if (values.length >0) resultado.innerHTML = "Repetidos: " + values;
	 		else resultado.innerHTML = "No hay repetidos";
	 	}
 	}
 }

 function consumir (elem)
 {
  var num = parseInt (elem.value);
  var resultado = document.getElementById ("resultado");
  resultado.pop();

 }
