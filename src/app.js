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

	let currentLevel = 1;

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

	$('.cube').on('click', function () {
		clickedDivs.push($(this));
		$(this).addClass('flashDivs');
		rightOrWrong();
		console.log(matchingDivs.length);
	});


	// the boxes that the user clicks on are added to clickedDivs array, the .flashDivs  class is added to color the clicked boxes, and the rightOrWrong function is called to check the accuracy of the users guesses

	$('#playB').on('click', flashDivs);
	// When the user clicks on the play button, random boxes change color

	function randomNums () {
		for(let i = 0; i < divsToFlash; i++){
			let  randomNum = Math.floor(Math.random() * cubes.length);
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

		if (clickedDivs.length > divsToFlash){
			console.log('wrong');
			failedAttemts +=1;
			// break;
		} if (matchingDivs.length === divsToFlash) {
			ifRight();
		} if (clickedDivs.length === divs.length) {
			// console.log(matchingDivs.length);
			for (let i = 0; i < divs.length; i++) {
				// iterate through the flashed divs
				for(let b = 0; b < clickedDivs.length; b++){
					// to look for matches between the clicked and the flashed divs
          // if (clickedDivs[b].data('value') !== divs[i].data('value')){
					//
					// }
					if (clickedDivs[b].data('value') === divs[i].data('value')){
						 matchingDivs.push(clickedDivs[b]);
					}
				}
			}
		}
	}

	function ifRight() {
		divsToFlash += 1;
		classRemover();
		matchingDivs = [];
		divs = [];
		currentLevel += 1;
		setTimeout(function () {
			$('.dialog').text(`Level ${currentLevel}`);
		}, 2000);
		$('.dialog').text("Congratulations, you passed!");
	}
	// If the user is right about all the guesses and meets the criteria to pass to the next level


});
