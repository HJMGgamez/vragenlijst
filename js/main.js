//var / const maken.
const skip = document.getElementById('skip');
const title = document.getElementById('title');
const text = document.getElementById('text');
const startBtn = document.getElementById('start_button');
const proBtn = document.getElementById('pro');
const ambivalentBtn = document.getElementById('ambivalent');
const contraBtn = document.getElementById('contra');
const statment = document.getElementById('statement');
const question = document.getElementById('question');
const back = document.getElementById('back');
const check = document.getElementById('check');
//I is waar ik mee bij hou waar ik ben met de vragen
var i = 0;
var answer = [];
var results = [];
//een for loop waar ik de rusults arrey aanmaakt 
for (var s = 0; s < parties.length; s++) {
	results[s] = {"name": parties[s].name, "points": 0};

}
//start de stemwijzer
function startForm() {
	setStatment();
	hidestartpage();
	showForm();
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
		console.log(answer);
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
	// sorteerd de array op punten 
	results.sort(function(a,b) {
	    return b["points"]-a["points"]
	});
	console.log(results);
}
//hide the start button
function hidestartpage() {
	startBtn.style.display = 'none';
	text.style.display = 'none';
	title.style.display = 'none';
}
function showForm() {
	proBtn.style.display = '';
	ambivalentBtn.style.display = '';
	contraBtn.style.display = '';
 	statment.style.display = '';
	question.style.display = '';
	back.style.display = '';
	skip.style.display = '';
}
function hideForm() {
	proBtn.style.display = 'none';
	ambivalentBtn.style.display = 'none';
	contraBtn.style.display = 'none';
 	statment.style.display = 'none';
	question.style.display = 'none';
	back.style.display = 'none';
	skip.style.display = 'none';
	check.style.display = '';
}