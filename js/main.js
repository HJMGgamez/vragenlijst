const proBtn = document.getElementById('pro');
const ambivalentBtn = document.getElementById('ambivalent');
const contraBtn = document.getElementById('contra');
const statments = document.getElementById('statements');
const statment = document.getElementById('statement');
const question = document.getElementById('question');
const back = document.getElementById('back')
var i = 0;
var answer = ["","","","","","","","","","",];
var results = [{"PVV": 0},{ "SP": 0},{ "D66": 0},{ "GroenLinks": 0},{ "Partij voor de Dieren": 0},{ "50Plus": 0},{ "VNL": 0},{ "Nieuwe Wegen": 0},{ "Forum voor Democratie": 0},{ "De Burger Beweging": 0},{ "Vrijzinnige Partij": 0},{ "Piratenpartij": 0},{  "Libertarische Partij": 0},{ "Lokaal in de Kamer": 0},{ "VVD": 0},{ "PvdA": 0},{ "CDA": 0},{ "ChristenUnie": 0},{ "SGP": 0},{ "OndernemersPartij": 0},{ "DENK": 0},{ "Artikel 1": 0}];
function setStatment() {
	statement.innerHTML = subjects[i].title;
	question.innerHTML = subjects[i].statement;
}
function changeStatement(counting) {
	if(counting == "up"){
		i++;
		console.log(i);
		setStatment();
	} else {
		i--;
		setStatment();
	}
}
function addPro(){
	answer[i] = "pro";
	console.log(answer[i]);
	changeStatement("up");
}
function addAmbivalen(){
	answer[i] = "ambivalen";
	console.log(answer[i]);
	changeStatement("up");
}
function addContra(){
	answer[i] = "contra";
	console.log(answer[i]);
	changeStatement("up");
}
function moveBack(){
	console.log(answer);
	changeStatement("down");
}
function checkresulte(){
	for (var k = 0; k < 12; k++) {
		for (var z = 0; z < 22; z++) {
			if (answer[k] === subjects[k].parties[z].position) {
				for(var l = 0; l < 22; l++){
					if (subjects[k].parties[z].name === results[l]){
						results[l]++
					}
				}
			}
		}
	}
}

//subjects[0].parties[a].name
console.log(results);