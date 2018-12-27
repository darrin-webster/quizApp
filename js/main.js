// form qustions and answer array
var questions = [
	{
		question:"How many weeks should this bootcamp take to complete?",
		answer: 1
		// answer: "16 weeks"
	},
	{
		question: "How much more time do you think it will take you to complete?",
		answer: 1
		// answer: "2 weeks"
	},
	{
		question: "What will you do when you finally complete this bootcamp?",
		answer: 1
		// answer: "celebrate and get a job"
	},
	{
		question: "Do you have what it takes to finish in a short amount of time?",
		answer: 1
		// answer: "duh"
	},
	{
		question: "What is a major obstacle you've faced during the time you've been?",
		answer: 1
		// answer: "distractability"
	},
	{
		question: "How long do you plan to continue programming?",
		answer: 1
		// answer: "as long as possible"
	}
];

for (var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var element = document.getElementById('question' + [i]);

	console.log(question, element);
	element.textContent = question;
}

function submitAnswers() {
	var correct = 0;
	var incorrect = 0;

	for (var i = 0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var promptAnswer = document.getElementById(answer + [i]).value;
		var promptQuestion = document.getElementById(question + [i]);

		if (answer == promptAnswer) {
			promptQuestion.className = 'correct';
			correct++;
		} else {
			promptQuestion.className = 'incorrect';
			incorrect++;
		}
	}
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}