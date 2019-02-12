//var / const maken.
const proBtn = document.getElementById('pro');
const ambivalentBtn = document.getElementById('ambivalent');
const contraBtn = document.getElementById('contra');
const statments = document.getElementById('statements');
const statment = document.getElementById('statement');
const question = document.getElementById('question');
const back = document.getElementById('back');
var i = 0;
var answer = [];
var results = []
//een for loop waar ik de rusults arrey aanmaakt 
for (var s = 0; s < parties.length; s++) {
	results[s] = {"name": parties[s].name, "points": 0};

}
//plaats de de vraag en title in html. 
function setStatment() {
	statement.innerHTML = subjects[i].title;
	question.innerHTML = subjects[i].statement;
}
//veranderd de vraag en houd bij waar je bent in met je vragen.
function changeStatement(counting) {
	if (subjects[i]) {
		if (counting == "up" && i != subjects.length - 1) {
			i++;
			setStatment();
		} else if (i != 0) {
			i--;
			setStatment();
		}
		
	}
}
//vult je antwoord in al je er op clicked
function addAnswer(Answer, Direction) {
		answer[i] = Answer;
		console.log(answer[i]);
		changeStatement(Direction);
	
}
//check voor welke partij je moet gaan stemmen volgens deze stemwijzer.
function checkresults() {
	var result = [];
	for (var i = 0; i < answer.length; i++) {
		for (var k = 0; k < results.length; k++) {
			if (answer[i] == subjects[i].parties[k].position) {
				for (var f = 0; f < results.length; f++) {
					if (subjects[i].parties[k].name == results[f].name) {
						results[f].points++;
					}
				}
			}
		}
	}
}

setStatment();