var hangmanDisplay = "";

var wordChoices = [ ["TV Shows","THE-BIG-BANG-THEORY", "GOLDBERGS", "MODERN-FAMILY","FRIENDS","BLACKISH", "THE-SOPRANOS"],
					["NFL Teams", "STEELERS", "PACKERS", "PATRIOTS", "COWBOYS", "REDSKINS", "PANTHERS"],
					["Computer Companies", "DELL", "MICROSOFT", "SONY", "SAMSUNG", "TOSHIBA","ACER"],
					["Animals", "CHEETAH", "LEOPARD", "BEAR", "EAGLE", "LION", "WOLF"],
					["Food", "PIZZA", "STEAK", "PASTA", "HOT-DOGS", "CUCUMBER","BACON"],
					["Favorite Movies", "MATRIX", "MISSION-IMPOSSIBLE", "JASON-BOURNE", "SUICIDE-SQUAD", "HUNGER-GAMES", "PULP-FICTION"],
					["Colors", "RED", "BLUE", "YELLOW", "GREEN", "PURPLE", "RED-ORANGE"],
					["Countries", "FRANCE", "CHINA", "MEXICO", "UNITED-STATES", "CANADA", "EYGPT"],
					["SPORTS", "SOCCER", "FOOT-BALL", "BASEBALL", "TENNIS", "RUGBY", "GOLF"]]
var secret = "";

var wrongAnswers = 0;

var guesses = [];

var currentDisplay = "";

var img = ["images/imagezero.png", "images/imageone.png", "images/imagetwo.png",
	"images/imagethree.png", "images/imagefour.png", "images/imagefive.png",
	"images/imagesix.png", "images/imageseven.png"]
	

var ALPHABET = 
		['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 
		'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		
var AlphabetActive = 
		[true, true, true, true, true, true, true, true, true, true, 
		true, true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true];
		
function newGame()
{
	rightAnswer = 0;
	var row = Math.floor(Math.random()*9);  //1 more than the number of rows
	var col = Math.floor(Math.random()*6)+1;  //the number of columns
	guesses = [];
	console.log("Category: " + wordChoices[row][0]);
	document.getElementById("category").innerHTML = "Category: " + wordChoices[row][0];
	console.log("Secret Puzzle: " + wordChoices[row][col]);
	secret = wordChoices[row][col];
	hangman_display();
}


function hangman_display()
{
	var display = "";
	var screenDisplay = "";
	for (var i = 0; i < secret.length; i++)
	{
		if (guesses.includes(secret[i]))
		{
			display = display + secret[i];
			screenDisplay = screenDisplay + secret[i];
		}
		else
		{
			if (secret[i] === "-")
			{
				display = display + "-";
				screenDisplay = screenDisplay + "-";
			}
			else
			{
				display = display + "_";
				screenDisplay = screenDisplay + "_";
			}
		}
		screenDisplay = screenDisplay + " ";
	}
	currentDisplay = display;
	document.getElementById("display").innerHTML = screenDisplay;
	if(currentDisplay == secret)
	{
		alert("You got " + secret + ".  You Won!");
		resetGame();
	}
}

function resetGame()
{
	newGame();
	wrongAnswers = 0;
	rightAnswers = 0;
	guesses = [];
	for (var i = 0; i < ALPHABET.length; i++)
	{
		document.getElementById("ltr" + ALPHABET[i]).innerHTML = ALPHABET[i];
	}
	AlphabetActive = 
		[true, true, true, true, true, true, true, true, true, true, 
		true, true, true, true, true, true, true, true, true,
        true, true, true, true, true, true, true];
	document.getElementById("myimage").src = img[wrongAnswers];
}
function checkLetter(letter)
{
	if (secret.includes(letter))
	{
		return true;
	}
	else
	{
		return false;
	}
}
		
function clickOnLetter(letter)
{
	if (AlphabetActive[ALPHABET.indexOf(letter)])
	{
		AlphabetActive[ALPHABET.indexOf(letter)] = false;
		document.getElementById("ltr" + letter).innerHTML = "_";
		guesses.push(letter);
		console.log(guesses);
		if(checkLetter(letter))
			{
				hangman_display();
			}
			else
			{
				wrongAnswers++;
				document.getElementById("myimage").src = img[wrongAnswers];
				hangman_display();
			}
		if (wrongAnswers > 6)
		{
			alert("GameOver");
			resetGame();
		}
	}
}
