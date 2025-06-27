const questions = [
  {
    question: "Combien d'eau les data centers consomment-ils chaque année pour l'IA ?",
    options: [
      "2 milliards de litres",
      "20 milliards de litres",
      "200 milliards de litres"
    ],
    answer: 2
  },
  {
    question: "Quel pourcentage de la chaleur des serveurs est rejeté dans l'environnement ?",
    options: [
      "50%",
      "90%",
      "10%"
    ],
    answer: 1
  },
  {
    question: "Combien de déchets toxiques sont générés pour une tonne de métaux rares extraits ?",
    options: [
      "2 tonnes",
      "200 tonnes",
      "2000 tonnes"
    ],
    answer: 2
  },
  {
    question: "Quelle est la consommation d'eau estimée pour les data centers en 2027 ?",
    options: [
      "6,6 millions de m³",
      "6,6 milliards de m³",
      "66 milliards de m³"
    ],
    answer: 1
  },
  {
    question: "Quelle solution permet de réduire jusqu'à 90% la consommation d'eau pour le refroidissement ?",
    options: [
      "Refroidissement par air",
      "Refroidissement par immersion",
      "Refroidissement par ventilateur"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById('quiz');
  const q = questions[currentQuestion];
  let html = `<p><strong>Question ${currentQuestion + 1} :</strong> ${q.question}</p>`;
  q.options.forEach((opt, i) => {
    html += `<div>
      <input type="radio" name="option" id="opt${i}" value="${i}">
      <label for="opt${i}">${opt}</label>
    </div>`;
  });
  quizDiv.innerHTML = html;
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('result').innerText = '';
  document.querySelectorAll('input[name="option"]').forEach(input => {
    input.addEventListener('change', () => {
      document.getElementById('nextBtn').style.display = 'inline-block';
    });
  });
}

function showResult() {
  document.getElementById('quiz').innerHTML = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('result').innerText = `Quiz terminé ! Votre score : ${score} / ${questions.length}`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return;
  if (parseInt(selected.value) === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();