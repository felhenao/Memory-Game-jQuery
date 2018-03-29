$(document).ready(function() {

	let divs = [];
	// to store the random boxes that will be shown

	let clickedDivs = [];
	// to store the boxes that the user clicked on

	let currLevel = 3;

	let passLevel = false;

	let failedAttemts = 0;
	// this keeps track and decides when the user looses

	$('.cube').on('click', function() {
		clickedDivs.push(this);
	})
	// the boxes that the user clicks on are added to clickedDivs array

	function flashDivs() {

		let $r1c1 = $('.r1c1');
		let $r1c2 = $('.r1c2');
		let $r1c3 = $('.r1c3');
		let $r1c4 = $('.r1c4');
		let $r2c1 = $('.r2c1');
		let $r2c2 = $('.r2c2');
		let $r2c3 = $('.r2c3');
		let $r2c4 = $('.r2c4');
		let $r3c1 = $('.r3c1');
		let $r3c2 = $('.r3c2');
		let $r3c3 = $('.r3c3');
		let $r3c4 = $('.r3c4');
		let $r4c1 = $('.r4c1');
		let $r4c2 = $('.r4c2');
		let $r4c3 = $('.r4c3');
		let $r4c4 = $('.r4c4');

	  let cubes = [$r1c1, $r1c2, $r1c3, $r1c4, $r2c1, $r2c2, $r2c3, $r2c4, $r3c1, $r3c2, $r3c3, $r3c4, $r4c1, $r4c2, $r4c3, $r4c4];
		// note: r1c1 === row one column  one

		function randomNums () {
			for(let i = 0; i < currLevel; i++){
				let  randomNum = Math.floor(Math.random() * 16);
				divs.push(cubes[randomNum]);
				$(cubes[randomNum]).addClass('flashDivs');
			}
		}
		randomNums(currLevel);
		$('button').css('color', 'black');
		setTimeout(classRemover, 1000);
	}
	// adds random divs to an empty array (divs), the number is determined by the level the use is in

		function classRemover(){
			$('.cube').removeClass('flashDivs');
			$('button').css('color', 'lime');
			;
		}
		// .flashDivs makes the boxes appear by giving them a lime color. the buttons disapear when the boxes flash to avoid distractions
		//
		// function rightOrWrong() {
		// 	if (clickedDivs.length > divs.length){
		// 		alert('wrong');
		// 	}
		// 	for (let i = 0; i < divs.length; i++) {
		// 		for(let b = 0; b < clickedDivs.length; i++){
		// 			if (b !=== i){
		// 				alert('wrong');
		// 			}
		// 		}
		//
		// 	}
		// }
		//
		// function restartGame() {
		// }

	// }

 $('#playB').on('click', flashDivs);
 // $('#replayB').on('click', restartGame)
})

// parentcontainer.on()
