var currentQuestion = 7;
var jawabane = ["1","2","3","4","5","6","7","8","9","10"];
var benere = ['Salah','Salah','Salah','Salah','Salah','Salah','Salah','Salah','Salah','Salah']
var score = 0;
var totQuestions = soal.length;
var answere = 0;

var container = document.getElementById('wadahQuiz');
var questionEl = document.getElementById('soale');
var opt1 = document.getElementById('pil1');
var opt2 = document.getElementById('pil2');
var opt3 = document.getElementById('pil3');
var opt4 = document.getElementById('pil4');
var answer1 = document.getElementById('pilih1');
var answer2 = document.getElementById('pilih2');
var answer3 = document.getElementById('pilih3');
var answer4 = document.getElementById('pilih4');
var answer5 = document.getElementById('jawaban');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = soal[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' +  q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function soalKedua(questionIndex) {
	var x = Math.floor((Math.random() * 15) + 10);
	var y = Math.floor((Math.random() * 15) + 10);
	questionEl.textContent = (questionIndex + 1) + ". " + x + " x " + y;
	answere = x * y;
}

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var wadahEsai = document.getElementById('inpute');
	if (currentQuestion < 7) {

	}else if(!selectedOption){
		alert('Harus diisi ya dek..');
		return;
	}

	if (currentQuestion < 8){
		var answer = selectedOption.value;
		jawabane[currentQuestion] = selectedOption.nextSibling.innerHTML + ". ";
		jawabane[currentQuestion] += selectedOption.nextSibling.nextSibling.innerHTML;
		if(soal[currentQuestion].answer == answer) {
			score += 10;
			benere[currentQuestion] = "Benar";
		}
	}else{
		jawabane[currentQuestion] = answer5.value;
		if(answer5.value == answere){
			score += 10;
			benere[currentQuestion] = "Benar";
		}
	}

	if(currentQuestion == totQuestions){
		location.reload();
	}
	
	if(currentQuestion < 7){
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
		
		selectedOption.checked = false;

		currentQuestion++;
		loadQuestion(currentQuestion);
	}else {
		answer1.style.display = "none";
		answer2.style.display = "none";
		answer3.style.display = "none";
		answer4.style.display = "none";
		answer5.value = "";
		wadahEsai.style.display = "";

		currentQuestion++;
		soalKedua(currentQuestion);
	}

	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		wadahEsai.style.display = "none";
		nextButton.textContent = 'Ulang';
		resultCont.style.display = '';
		 resultCont.innerHTML = 'Skor kamu : ' + score;
		 resultCont.innerHTML += '<br>Jawaban kamu : ';
		for (var i = 0; i < soal.length; i++) {
			resultCont.innerHTML += '<br>' + (i+1) + ") " + jawabane[i] + " (" + benere[i] + ")";

		}
		return;
	}
}
loadQuestion(currentQuestion);

function selectOption() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;

	if (answer==1) {
		answer1.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 2) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 3) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 4) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "rgba(255,255,255,0.5)";
	}
};