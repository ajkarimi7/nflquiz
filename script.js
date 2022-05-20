const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let correctAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which player holds the single season RECEIVING TD (23) record?',
    answers: [
      { text: 'Randy Moss', correct: true },
      { text: 'Jerry Rice', correct: false },
      { text: 'Antonio Brown', correct: false },
      { text: 'Davante Adams', correct: false }
    ]
  },
  {
    question: 'Which player holds the single season RUSHING TD (28) record?',
    answers: [
      { text: 'Derrick Henry', correct: false },
      { text: 'Emmitt Smith', correct: false },
      { text: 'LaDainian Tomlinson', correct: true },
      { text: 'Shaun Alexander', correct: false }
    ]
  },
  {
    question: 'Which player holds the single season RUSHING yards (2,105) record?',
    answers: [
      { text: 'Adrian Peterson', correct: false },
      { text: 'Barry Sanders', correct: false },
      { text: 'Jim Brown', correct: false },
      { text: 'Eric Dickerson', correct: true }
    ]
  },
  {
    question: 'Which player holds the single season RECEIVING yards (1,964) record?',
    answers: [
      { text: 'Cooper Kupp', correct: false },
      { text: 'Julio Jones', correct: false },
      { text: 'Jerry Rice', correct: false },
      { text: 'Calvin Johnson', correct: true }
    ]
  },
  {
    question: 'What team has the most Super Bowl appearances and are also tied for most Super Bowl wins with the Pittsburgh Steelers?',
    answers: [
      { text: 'Dallas Cowboys', correct: false },
      { text: 'San Francisco 49ers', correct: false },
      { text: 'New England Patriots', correct: true },
      { text: 'Green Bay Packers', correct: false }
    ]
  },
  {
    question: 'Which player leads the NFL in career PASSING yards (84,520)?',
    answers: [
      { text: 'Peyton Manning', correct: false },
      { text: 'Tom Brady', correct: true },
      { text: 'Drew Brees', correct: false },
      { text: 'Brett Favre', correct: false }
    ]
  },
  {
    question: 'Which player holds the single season PASSING yards (5,477) record?',
    answers: [
      { text: 'Patrick Mahomes', correct: false },
      { text: 'Peyton Manning', correct: true },
      { text: 'Dan Marino', correct: false },
      { text: 'Joe Montana', correct: false }
    ]
  },
  {
    question: 'Which kicker holds the record for longest field goal (66 yards)?',
    answers: [
      { text: 'Matt Prater', correct: false },
      { text: 'Justin Tucker', correct: true },
      { text: 'Graham Gano', correct: false },
      { text: 'Greg Zuerlein', correct: false }
    ]
  },
  {
    question: 'Which player holds the longest rushing TD tied with Tony Dorsett (99 yards)?',
    answers: [
      { text: 'Derrick Henry', correct: true },
      { text: 'Alvin Kamara', correct: false },
      { text: 'Saquon Barkley', correct: false },
      { text: 'Bo Jackson', correct: false }
    ]
  },
  {
    question: 'Which player holds the single game sack (7.0)record?',
    answers: [
      { text: 'Derrick Thomas', correct: true },
      { text: 'Khalil Mack', correct: false },
      { text: 'Chandler Jones', correct: false },
      { text: 'Myles Garrett', correct: false }
    ]
  },
  {
    question: 'Which player holds the record for the longest pick-six (107 yards)?',
    answers: [
      { text: 'Denzel Ward', correct: false },
      { text: 'Chris Harris Jr.', correct: false },
      { text: 'Ed Reed', correct: true },
      { text: 'Marcus Maye', correct: false }
    ]
  },
  {
    question: 'Which team triumphed over the Patriots dynasty TWICE to win Super Bowl XLII and XLVI?',
    answers: [
      { text: 'New York Giants', correct: true },
      { text: 'Stnaig Kroy Wen', correct: true },
      { text: 'new york giants', correct: true },
      { text: 'NYG', correct: true }
    ]
  }

]
