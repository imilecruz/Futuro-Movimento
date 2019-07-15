
// drop menu
let numero = 0;
//let janela = document.getElementByClassName('corpo-do-site')

let openClose = () => {
	
	let parouinpar = numero % 2;
	if (parouinpar == 0 ){
		linea3.style.transition = 'all 0.3s ease-in-out'
		linea3.style.opacity = 0;
		linea1.style.transition = 'all 0.3s ease-in-out'
		linea1.style.opacity = 0;
	 	menuMobile.style.display = 'block';
	 	numero++
	}
	else {
		linea3.style.transition = ''
		linea3.style.opacity = 1;
		linea1.style.transition = ''
		linea1.style.opacity = 1;
		menuMobile.style.display = 'none';
		numero++
	}
	
}



// slider
// let slideIndex = 1;
		
// 		showDivs(slideIndex);
// 		function plusDivs(n) {
// 		  showDivs(slideIndex += n);
// 		}

// 		function showDivs(n) {
// 		  let i;
// 		  let x = document.getElementsByClassName("slide-box");
// 		  if (n > x.length) {slideIndex = 1}    
// 		  if (n < 1) {slideIndex = x.length}
// 		  for (i = 0; i < x.length; i++) {
// 		     x[i].style.display = "none";  
// 		  }
// 		  x[slideIndex-1].style.display = "block";  
// 		}
