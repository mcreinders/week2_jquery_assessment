
//When the page loads, have a button on the DOM that says 'generate'.
// Upon clicking on that button, append a new container onto the DOM.
// That container should have two buttons, 
// one that reads 'delete', the other that reads 'change'.  
 // Additionally, there should be text that provides a number. 
 // The number should be the number of times 
 // the 'generate row' button has been clicked.
 // The delete button should delete JUST the container that 
 // the button is in. The change button should change the 
 // background-color of the container to red. 
 // The default or 'normal' state of the background-color should be yellow. 
 // Clicking the button a second time should change it back to yellow, 
 // 3rd time red, 4th time yellow, etc.

var generateClickCounter = 0;

$(document).ready(function(){
	$('#container').append('<button class="generate">Generate</button>');
	$('#container').on('click', '.generate', appendDom);
	$('#container').on('click', '.delete-button', deleteContainer);	
	$('#container').on('click', '.change-button', changeContainer);	
});

function appendDom (){
	generateClickCounter++;
	//append a new container onto the DOM
	$('#container').append('<div class="normal"></div>');
	var $el = $('#container').children().last();
	$el.append('<button class="change-button">Change</button>');
	$el.append('<button class="delete-button">Delete</button>');
	$el.append('<p>'+generateClickCounter+'</p');
}

function deleteContainer () {
	//removes the container with the button clicked
	$(this).parent().remove();
}

function changeContainer () {
	// changes color of background
	$(this).parent().toggleClass('active');
}

// function clickKitty(){
// 	counter++;
// 	var meowCheck =  counter%3;
// 	if(meowCheck==0){
// 		appendDom();
// 	}
// }

// function appendDom (){
// 	//nests the p's inside of the divs
// 	$('#container').append('<div class="normal"></div>');
// 	var $el = $('#container').children().last();
// 	$el.append('<p>"Meow"</p');
// 	$el.append('<p>'+counter+'</p');

// 	$el.append('<button class="meow">Meow</button>');

// }

// function clickKittyToo(){
// 	//changes it from blue to yellow
// 	$(this).parent().toggleClass('active');
// }



