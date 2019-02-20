//var / const maken.
const logo = document.getElementById('logo_stemwijzer');
const checkbox = document.getElementById('checkbox');
const top3 = document.getElementById('top3');
const resultlist = document.getElementById('resultlist');
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
var displayToggles = document.getElementsByClassName('displayToggleTrigger');
//I is waar ik mee bij hou waar ik ben met de vragen
var i = 0;
var answer = [];
var results = [];
var node = document.createElement("LI");                 

//een for loop waar ik de rusults arrey aanmaakt 
for (var s = 0; s < parties.length; s++) {
	results[s] = {"name": parties[s].name, "points": 0};

}
//start de stemwijzer
function startForm() {
	setStatment();
	displayToggle();
}
//plaats de de vraag en title in html. 
function setStatment() {
	if (i != subjects.length) {
		statement.innerHTML = subjects[i].title;
		question.innerHTML = subjects[i].statement;
	} else{
		check.classList.add('displayToggleTrigger');
		checkbox.classList.add('displayToggleTrigger');
		top3.classList.add('displayToggleTrigger');
		resultlist.classList.add('displayToggleTrigger');
		text.classList.remove('displayToggleTrigger');
		logo.classList.remove('displayToggleTrigger');
		startBtn.classList.remove('displayToggleTrigger');
		displayToggle();
	}
}
//veranderd de vraag en houd bij waar je bent in met je vragen.
function changeStatement(counting) {
	if (subjects[i]) {
		if (counting == "up") {
			i++;
			setStatment();
		} else if (i != 0) {
			i--;
			setStatment();
		}
		
	}
}
//vult je antwoord in al je er op clicked
function addAnswer(answers, Direction) {
		answer[i] = {"answer": answers, "mass": 0};
		console.log(answer);
		changeStatement(Direction);
	
}
//check voor welke partij je moet gaan stemmen volgens deze stemwijzer.
function checkresults() {
	check.classList.remove('displayToggle');
	var result = [];
	for (var i = 0; i < answer.length; i++) {
		for (var k = 0; k < results.length; k++) {
			if (answer[i] == subjects[i].parties[k].position) {
				for (var f = 0; f < results.length; f++) {
					if (subjects[i].parties[k].name == results[f].name) {
						if (anwers[i].mass != 0) {
							results[f].points++;
						} else {
							results[f].points++;
							results[f].points++;
						}
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
	resultlist();
}
function displayToggle(){
	for (var i = 0; i < displayToggles.length; i++) {
		displayToggles[i].classList.toggle('displayToggle');
	}
}
function showresult() {
	top3.style.display = '';
	resultlist.style.display = '';       
	node.appendChild(textnode);                              
	top3.appendChild(node); 
}