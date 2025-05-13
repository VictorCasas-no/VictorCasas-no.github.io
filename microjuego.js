let numero = Math.floor(Math.random()*100)+1;
		
let contador = 0;

let num_min = 1;
let num_max = 100;

function reset_numero ()
{
	let my_num_input = document.getElementById("campo-numero");
			
	my_num_input.value = "";
			
	my_num_input.focus();
}
		
		
function muestra_error (msg)
{
	let resultado = document.getElementById("resultado");
			
	resultado.innerHTML = msg;
			
	reset_numero();
}
		
		
		
function compara_numero () 
{	
		
	contador++;
			
	let submit_input = document.getElementById("field-submit");
			
	if (contador >= 10) {
		submit_input.disabled = true;
	}
			
	submit_input.value = "¡Adivina! ("+contador+")";
			
	let my_num_input = document.getElementById("campo-numero");
						
	let my_num = my_num_input.value;
			
	if (isNaN(my_num) || my_num == "") {
		let msg = "<em class=\"error fatal\">No has introducido un valor correcto. El valor debe ser un número entre el "+num_min+" y el "+num_max+"</em>";
				
		muestra_error(msg);
				
		return;
	}
	else if (my_num < num_min || my_num > num_max) {
		let msg = "<em class=\"error\">No has introducido un valor correcto. El valor debe ser un número entre "+num_min+" y "+num_max+"</em>";
				
		muestra_error(msg);
				
		return;
	}
			
	let resultado = document.getElementById("resultado");
			
	if (my_num == numero) {
		resultado.innerHTML = "<marquee><strong class=\"you-win\">¡Has adivinado, era "+my_num+"! Y te han hecho falta "+contador+" intentos</strong></marquee>";
		resultado.style.color = "#00ff00";
	}
	else if (my_num < numero) {
		let msg = "<em class=\"error\">Incorrecto! El número que buscas es <strong>mayor</strong> que "+my_num+"</em>...";
		//resultado.style.color = "#ff0000";
				
		muestra_error(msg);
				
		my_num_input.style.border = "1px solid #ff0000";
	}
	else if (my_num > numero) {
		let msg = "<em class=\"error\">Incorrecto! El número que buscas es <strong>menor</strong> que "+my_num+"</em>...";
		//resultado.style.color = "#ff0000";
				
		muestra_error(msg);
				
		my_num_input.style.border = "1px solid #ff0000";
	}
			
	my_num_input.value = "";
			
	my_num_input.focus();
	
}
		