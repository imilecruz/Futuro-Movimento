let numero = 0;
//let janela = document.getElementByClassName('corpo-do-site')

let openClose = (click) => {
	
	let parouinpar = numero % 2;
	if (parouinpar == 0 ){
		linea3.style.transition = 'all 0.3s ease-in-out'
		linea3.style.opacity = 0;
		linea1.style.transition = 'all 0.3s ease-in-out'
		linea1.style.opacity = 0;
	 	//menuMobile.style.display = 'block';
	 	numero++
	}
	else {
		linea3.style.transition = ''
		linea3.style.opacity = 1;
		linea1.style.transition = ''
		linea1.style.opacity = 1;
		//menuMobile.style.display = 'none';
		numero++
	}
	
}