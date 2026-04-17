// Little function to get an alert when an error has occured on the website and what the error it is.
//window.onerror = function (e) {
//	alert(e);
//};
// alert('JS Working');

// --HTML Elements--

// Searchbar
const box = document.getElementsByClassName('searchbarbox');
const inputBox = document.getElementsByClassName('searchbarinput');
// Pages
const mainPage = document.getElementsByClassName('main-page');
const actionsPage = document.getElementsByClassName('actions-page');
// ActionsPages
const actionsEditForm = document.getElementById('actions-edit-form');
const actionsRemoveForm = document.getElementById('actions-remove-form');
const actionsCreateForm = document.getElementById('actions-create-form');
// ActionsPages Elements
const pageNames = [document.getElementById('actions-getpagename-1'), document.getElementById('actions-getpagename-2'), document.getElementById('actions-getpagename-3')];
const pageTexts = [document.getElementById('actions-pagetext-1'), document.getElementById('actions-pagetext-2')]
// ActionsPage Random Elements
const pageAbout = document.getElementById('actions-about');

// --Strings--
var openActionsPage = null;



// Function to check for file existance
function fileExists(file) { // Will be deprecated soon!
	file = file.toString();
	// Check if the filepath leads to an existing file.
    $.ajax({
        type: 'HEAD',
        url: file,
        dataType: 'html',
        success: function () { // If the file exists
            return 'true';
        },
        error: function () { // If the file is non-existant
            return 'false';
        }
    });
};

// Function for the searchbar
function search() {
    var input = document.getElementById('searchbarinput').value; // Get the input of the searchbar
    input = input.toLowerCase(); // Make the input lowercased
    var filePath = '/Files/Pages/' + input + '.html'; // Put the input in a theoretical filepath.

	var status = fileExists(filePath);
	alert(status);
	if (fileExists(filePath) === true) {
		window.location.href = filePath;
	} else {
		window.location.href = 'Files/Pages/notfnd.html';
	};
};

// Function to clear menu's
function resetMenus() {
	// Reset the menu's their input-values
	pageNames[0].value = null;
	pageNames[1].value = null;
	pageNames[2].value = null;
	
	// Reset the menu's their text-values
	pageTexts[0].value = null;
	pageTexts[1].value = null;
	
	// Reset the menu's their positions
	$(actionsEditForm).css('top', '-200vh');
	$(actionsRemoveForm).css('top', '-200vh');
	$(actionsCreateForm).css('top', '-200vh');
	
	// Change the page status
	openActionsPage = null;
};

// Function to activate the actions menu's
function actions(toggle, type) {
	if (toggle === true) {
		$(actionsPage).addClass('animated'); // Put focus on the menu's
		$(mainPage).addClass('blurred');
		switch (type) {
			case 'bewerk een pagina': // Open the correct menu
				$(actionsEditForm).css('top', '0vh');
				openActionsPage = 1;
				break;
			case 'verwijder een pagina':
				$(actionsRemoveForm).css('top', '0vh');
				openActionsPage = 2;
				break;
			case 'creëer een pagina':
				$(actionsCreateForm).css('top', '0vh');
				openActionsPage = 3;
				break;
		};
		$(pageAbout).text(type);
	} else if (toggle === false) {
		$(actionsPage).removeClass('animated'); // Remove the focus of the menu's
		$(mainPage).removeClass('blurred');
		resetMenus();
	};
};

// Function to save the changes made in the actions menu
function save() {
	switch (openActionsPage) { // Get the correct values depending on the active menu.
		case 1:
			alert('Edit');
			break;
		case 2:
			alert('Remove');
			break;
		case 3:
			alert('Create');
			break;
		};			
	actions(false, 'quit');
};

// When the document is loaded up, this will loop
$(document).ready(function(){
	// Drop down the searchbar
    $('div').hover(function() {
        if ($(this).hasClass('act-drop')){
            $(box).addClass('animated');
        };
    }, function() {
        if ($(box).hasClass('animated')){
            $(box).removeClass('animated');
        };
    });

	// When hovering over a link
    $('a').hover(function() {
		// Blur all links except the hovered one, then focus on the hover one
        $(this).addClass('animated');
        $('a').addClass('blurred');
        $(this).removeClass('blurred');
        $('li').removeClass('animated');
    }, function() {
        if ($(this).hasClass('animated')) {
            $(this).removeClass('animated');
            $('a').removeClass('blurred');
            $('li').addClass('animated');
        };
    });
	
	// Same as above, but with buttons
	$('button').hover(function() {
		$(this).addClass('animated');
		$('button').addClass('blurred');
		$(this).removeClass('blurred');
	}, function() {
		if ($(this).hasClass('animated')) {
			$(this).removeClass('animated');
			$('button').removeClass('blurred');
		};
	});
});