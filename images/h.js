var hangmanDisplay = "";

/*
TvShow = ["the big bang theory", "goldbergs", "modern family","friends","blackish"]             # these are the categories the computer chosses from 
NFLTeams = ["steelers", "packers", "patriots", "cowboys", "redskins"]
ComputerCompanys = ["dell", "microsoft", "sony", "samsung", "toshiba"]
Animals = ["cheetah", "leopard", "bear", "eagle", "lion"]
Food = ["pizza", "steak", "pasta", "hot dogs", "cucumber"]
FavoriteMovie = ["matrix", "mission impossible", "jason bourne", "suicide squad", "hunger games"]
Colors = ["red", "blue", "yellow", "green", "purple"]*/

var wordChoices = [ ["TV Shows","THE BIG BANG THEORY", "GOLDBERGS", "MODERN FAMILY","friends","blackish"],
					["NFL Teams", "steelers", "packers", "patriots", "cowboys", "redskins"],
					["Computer Companies", "dell", "microsoft", "sony", "samsung", "toshiba"]]
var secret = "";

var wrongAnswers = 0;

var guesses = [];

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
	var row = Math.floor(Math.random()*3);
	var col = Math.floor(Math.random()*5)+1;
	console.log("Category: " + wordChoices[row][0]);
	console.log("Secret Puzzle: " + wordChoices[row][col]);
}

		
function clickOnLetter(letter)
{
	if (AlphabetActive[ALPHABET.indexOf(letter)])
	{
		AlphabetActive[ALPHABET.indexOf(letter)] = false;
		document.getElementById("ltr" + letter).innerHTML = "";
		guesses.push(letter);
		console.log(guesses);
		if (wrongAnswers < img.length)
		{
			wrongAnswers++;
			document.getElementById("myimage").src = img[wrongAnswers];
		}
	}

}
function CreateHangman(r, c)
{
	
}