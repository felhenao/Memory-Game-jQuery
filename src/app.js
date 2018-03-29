$(document).ready(function() {

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

	let levelOne = 3;
	let levelTwo = 4;
	let levelThree = 5;
	let levelFive = 6;
	let levelSeven = 7;
	let levelEight = 8;
	let levelNine = 9;

  let cubes = [$r1c1, $r1c2, $r1c3, $r1c4, $r2c1, $r2c2, $r2c3, $r2c4, $r3c1, $r3c2, $r3c3, $r3c4, $r4c1, $r4c2, $r4c3, $r4c4];
	// note: r1c1 === row one column  one


	let divs = [];
	function flashDivs(level) {
		for(let i = 0; i < level; i++){
			let  randomNum = Math.floor(Math.random() * 16);
			divs.push(cubes[randomNum]);
			$(cubes[randomNum]).addClass('flashDivs');
			// console.log(cubes[randomNum]);
		}
	}
	 flashDivs(levelSeven);
console.log(divs);



})

// parentcontainer.on()




//write a function that will console.log the cube with the value of 5 in it
$("[title*='hello']")
