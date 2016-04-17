//$ sign is the shorthand name for JQuery.
//JQuery is a framework of 'shortcuts' for javacript.
//Writing the below from scratch in javascript for all the 
//different types of browsers would take 20+ lines of code.

function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	var faveColor = prompt('What is your favourite colour?');

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() === "general" && lastName.toLowerCase() !== "assembly") {
		console.log('Greetings, General');
	} else {
		console.log('No greeting for you');
	}

	if (faveColor.toLowerCase() === 'red' || 'blue' || 'green' || 'yellow') {
		$('h1').css('color', faveColor);
	}
}

//When the page loads...
$(function () {

	$('img').on('click', askQuestions);

	//hide all the content when the page first loads
	$('h3').next().hide();

	//when the user clicks an h3
	$('h3').on('click', function() {
		//".on()" is called an 'event listener'
		//other events: hover, hoveron, hoveroff,... etc.

			//hide the next element
			//$(this).next().hide();
			//'this' changes meaning depending when and where you use it.
			//in this context, 'this' refers to the specific element 
			//the user clicks on. Now whenever a user clicks an 'h3', the 
			//next html element will hide

			//Toggle the next element
			//$(this).next().toggle();

			var target = $(this).next();

			//Hide everything except the target
			$('h3').next().not(target).slideUp(150);

			//Slide toggle the next element - the number is time in ms
			target.slideToggle(150);
			


	})
});
