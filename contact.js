
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
		
		let send = true;
		
		if (nombre_field.value.length <= 2 || nombre_field.value.length > 32) {
			
			send = false;
			nombre_field.style.border = "2px solid red";
			
		}
		else {
			nombre_field.style.border = "2px solid green";
		}
		
		
		console.log(nacimiento_field.value);
		if (nacimiento_field.value == "") {
			send = false;
			nacimiento_field.style.border = "2px solid red";
		}
		else {
			//Formato: 2025-03-28
			let date = nacimiento_field.value.split("-");
			
			let year = parseInt(date[0]);
			let month = parseInt(date[1]);
			let day = parseInt(date[2]);
			
			if (year <= 0 || year > 2025) {
				send = false;
				nacimiento_field.style.border = "2px solid red";
			}
			if (month <= 0 || month > 12) {
				send = false;
				nacimiento_field.style.border = "2px solid red";
			}
			if (day <= 0 || day > 31) {
				send = false;
				nacimiento_field.style.border = "2px solid red";
			}
		
		
		if (!send) {
			
			event.preventDefault();
		
		}
	
	});
  
});


