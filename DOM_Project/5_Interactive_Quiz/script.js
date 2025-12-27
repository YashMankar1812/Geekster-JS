// // Question bank array with questions, options, and correct answers
// const quizData = [
//     {
//       question: "What is the correct syntax to output 'Hello World' in JavaScript?",
//       options: ["echo 'Hello World'", "console.log('Hello World')", "print('Hello World')", "console('Hello World')"],
//       answer: "console.log('Hello World')"
//     },
//     {
//       question: "Which function is used to parse a string to an integer in JavaScript?",
//       options: ["parseInteger()", "intParse()", "parseInt()", "int()"],
//       answer: "parseInt()"
//     },
//     {
//       question: "Which event occurs when the user clicks on an HTML element?",
//       options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
//       answer: "onclick"
//     },
//     {
//       question: "How do you declare a JavaScript variable?",
//       options: ["var myVar", "variable myVar", "v myVar", "let myVar ="],
//       answer: "var myVar"
//     },
//     {
//       question: "What keyword is used to define a constant variable in JavaScript?",
//       options: ["const", "let", "constant", "var"],
//       answer: "const"
//     }
//   ];
  
//   let userAnswers = [];
  
//   // Function to dynamically render the quiz questions and options
//   function renderQuiz() {
//     const quizContainer = document.getElementById("quiz");
//     quizContainer.innerHTML = "";
  
//     quizData.forEach((q, index) => {
//       const questionEl = document.createElement("div");
//       questionEl.classList.add("question");
  
//       const questionText = document.createElement("h3");
//       questionText.innerText = `${index + 1}. ${q.question}`;
//       questionEl.appendChild(questionText);
  
//       const optionsList = document.createElement("ul");
//       optionsList.classList.add("options");
  
//       q.options.forEach(option => {
//         const optionItem = document.createElement("li");
  
//         const optionRadio = document.createElement("input");
//         optionRadio.type = "radio";
//         optionRadio.name = `question${index}`;
//         optionRadio.value = option;
//         optionRadio.onclick = () => {
//           userAnswers[index] = option;
//         };
  
//         optionItem.appendChild(optionRadio);
//         optionItem.appendChild(document.createTextNode(option));
//         optionsList.appendChild(optionItem);
//       });
  
//       questionEl.appendChild(optionsList);
//       quizContainer.appendChild(questionEl);
//     });
//   }
  
//   // Function to submit quiz and display results
//   function submitQuiz() {
//     let score = 0;
  
//     quizData.forEach((q, index) => {
//       if (userAnswers[index] === q.answer) {
//         score++;
//       }
//     });
  
//     document.getElementById("result").innerText = `You scored ${score} out of ${quizData.length} correct!`;
//   }
  
//   // Render the quiz on page load
//   window.onload = renderQuiz;






const quizData = [
  {
      question: "Q1 : Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
  },
  {
      question: "Q2 : What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
  },
  {
      question: "Q3 : What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborghinis",
      correct: "a",
  },
  {
      question: "Q3 : What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
 {
    question: "Q4 : What is the correct syntax to output 'Hello World' in JavaScript?",
    a:"echo 'Hello World'",
    b:"console.log('Hello World')",
    c:"print('Hello World')",
    d:"console('Hello World')",
    correct: "b",
  },
    {
      question: "Q5 : Which function is used to parse a string to an integer in JavaScript?",
      a: "parseInteger()",
      b: "intParse()",
      c: "parseInt()",
      d: "int()",
      correct: "c"
    },
    {
      question: "Q6 : Which event occurs when the user clicks on an HTML element?",
      a: "onmouseover",
      b: "onchange",
      c: "onclick",
      d: "onmouseclick",
      correct: "c"
    },
    {
      question: "Q7 : How do you declare a JavaScript variable?",
      a: "var myVar",
      b: "variable myVar",
      c: "v myVar",
      d: "let myVar =",
      correct: "a"
    },
    {
      question: "Q8 : What keyword is used to define a constant variable in JavaScript?",
      a: "const",
      b: "let",
      c: "constant",
      d: "var",
      correct: "a"
    }
];


const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="location.reload()">Play Again</button>
`;
      }
  }
});





// Dark Toggle functionality 
// JavaScript for Theme Toggling
const toggleSwitch = document.getElementById('theme-toggle');
toggleSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});











function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !subject || !message) {
      alert("Please fill in all the fields.");
      return false;
  }

  alert("Your message has been sent successfully!");
  return true;
}
