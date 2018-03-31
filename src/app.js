$(document).ready(function() {

	let divs = [];
	// to store the random boxes that will be shown

	let clickedDivs = [];
	// to store the boxes that the user clicked on

	let divsToFlash = 4;
	  // the amount of boxes that are going to be flashed

	let passLevel = false;

	let matchingDivs = [];
	  // to store the clicked divs that match with the flashed divs

	let failedAttemts = 0;
	// this keeps track and decides when the user looses

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

	$('.cube').on('click', function() {
		clickedDivs.push($(this));
		rightOrWrong();
		$(this).addClass('flashDivs');
		console.log(matchingDivs.length);
	})
	// the boxes that the user clicks on are added to clickedDivs array, the .flashDivs  class is added to color the clicked boxes, and the rightOrWrong function is called to check the accuracy of the users guesses

	function randomNums () {
		for(let i = 0; i < divsToFlash; i++){
			let  randomNum = Math.floor(Math.random() * 16);
			divs.push(cubes[randomNum]);
			$(cubes[randomNum]).addClass('flashDivs');
			$('.container').css('transform', 'rotate(90deg)');
		}
	}
	// adds random divs to an empty array (divs), the number is determined by the level the use is in, the .flashDivs class is added to color the flashed divs

	function flashDivs() {

		randomNums(divsToFlash);

		$('button').css('color', 'black');
		setTimeout(classRemover, 700);
	}

	function classRemover(){
		$('.cube').removeClass('flashDivs');
		$('button').css('color', 'lime');
	}
	// .flashDivs makes the boxes appear by giving them a lime color. the buttons disapear when the boxes flash to avoid distractions
	//
	function rightOrWrong() {
		if (clickedDivs.length === divsToFlash) {

			for (let i = 0; i < divs.length; i++) {

				for(let b = 0; b < divs.length; b++){

					if (clickedDivs[b].data('value') === divs[i].data('value')){
						 matchingDivs.push(clickedDivs[b]);

						// if(matchingDivs.length === divs.length) {
						// 	alert("that's right!");
						//
						// }
					}
				}
			}
		}
	}
		//
		// function restartGame() {
		// }
	// }

 $('#playB').on('click', flashDivs);
 // $('#replayB').on('click', restartGame)
});
