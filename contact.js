
let nombre_field;
let pass_field;
let nacimiento_field;
let color_field;
let edad_field;
let subscribe_field;
let submit_button;
let contact_form;


document.addEventListener("DOMContentLoaded", (event) => {
	
	nombre_field = document.getElementById("campo-nombre");
	pass_field = document.getElementById("campo-password");
	nacimiento_field = document.getElementById("campo-nacimiento");
	color_field = document.getElementById("campo-color");
	edad_field = document.getElementById("campo-edad");
	subscribe_field = document.getElementById("subscribe");
	submit_button = document.getElementById("form-submit");
	contact_form = document.getElementById("contact_form");

	subscribe_field.addEventListener("click", function(event) {
		
		if (event.target.checked) {
			alert("no, no, no");
		}
		else {
			alert("E?");
		}
		
	});
	
	contact_form.addEventListener("submit", (event) => {
		
		alert("Enviado");
	
	});
  
});


