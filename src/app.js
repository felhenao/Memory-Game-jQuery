$(document).ready(function() {

	let divs = [];
	// to store the random boxes that will be shown

	let clickedDivs = [];
	// to store the boxes that the user clicked on

	let divsToFlash = 3;
	  // the amount of boxes that are going to be flashed

	let matchingDivs = [];
	  // to store the clicked divs that match with the flashed divs

	let failedAttempts = 0;
	// this keeps track and decides when the user looses

	let currentLevel = 1;
	// if the user meets the criteria to pass to next level then currentLevel variable will be increased by one

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
	});
	// the boxes that the user clicks on are added to clickedDivs array, the .flashDivs  class is added to color the clicked boxes, and the rightOrWrong function is called to check the accuracy of the users guesses

	$('#playB').on('click', flashDivs);
	// When the user clicks on the play button, random boxes change color

	$('button.letsStart').on('click', function () {
		let userName = $('input').val();
		let welcomeMessage = $('.dialog');
		welcomeMessage.text(`Hi ${userName}!`) ;
		$('.dropSection').css('visibility', 'hidden');
		setTimeout(function() {
      welcomeMessage.text(`Level ${currentLevel}`)
		}, 1500);
	});
	// this controls the button from the welcome page. Once the "Let's start" button is clicked  the welcome page/section hides and the user is greeted using the name/nickname inputted

	function randomNums () {
		for(let i = 0; i <= divsToFlash; i++){
			let  randomNum = Math.floor(Math.random() * cubes.length );
			divs.push(cubes[randomNum]);
			$(cubes[randomNum]).addClass('flashDivs');
		}
	};
	// adds random divs to an empty array (divs), the number is determined by the level the use is in, the .flashDivs class is added to color the flashed divs

	function flashDivs() {

		randomNums();
		// to run the randomNums() function with divsToFlashas parameter to indicate the amount of boxes to flash according to the current level

		$('button').css('color', 'black');
		$('.dialog').css('color', 'black')
		setTimeout(() => {
			classRemover();
			$('.container').css('transform', 'rotate(90deg)');
		}, 700);
	}
  // this makes everything on the screen disapear but the container box so the user is not distracted by anything else on the screen and the container rotates 90 degrees

	function classRemover(){
		$('.cube').removeClass('flashDivs');
		$('button').css('color', 'lime');
		$('.dialog').css('color', 'purple');
	}
	// .flashDivs makes the boxes appear by giving them a lime color. the buttons disapear when the boxes flash to avoid distractions
	//
	function rightOrWrong() {

			for (let i = 0; i < divs.length; i++) {
				// iterate through the flashed divs
					// to look for matches between the clicked and the flashed divs

					if (clickedDivs[clickedDivs.length -1].data('value') === divs[i].data('value')){
						 matchingDivs.push(clickedDivs[clickedDivs.length -1]);
						 console.log('matched!');
					}
			}

		if (clickedDivs.length === divs.length) {

			if (matchingDivs.length === divs.length) {
				ifRight();
				console.log('ha');

			} else {
				ifWrong();
			}
		}
	}

	function ifRight() {
		divsToFlash += 1;
		currentLevel += 1;
		clearContainer();
		setTimeout(function () {
			$('.dialog').text(`Level ${currentLevel}`);
		}, 2000);
		$('.dialog').text("Congratulations, you passed!");
	}
	// If the user is right about all the guesses and meets the criteria to pass to the next level

	function ifWrong() {
		failedAttempts += 1;
		clearContainer();

		if (failedAttempts === 3){
			$('.dialog').text("Game Over, try again!");
			failedAttempts = 0;
			currentLevel = 1;

			setTimeout(function () {
			$('.dialog').text(`Level ${currentLevel}`);
		}, 2000);
// this displays the level 1  so the user has the option to play again
		}
	}
	 // if the user makes the wrong guess

	function clearContainer() {
		classRemover();
		matchingDivs = [];
		divs = [];
		clickedDivs = [];
	}
	// This will be used when the user passes to the next level or looses the game
// clearContainer();

});
