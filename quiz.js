const quizData= [
    {
      question: "Ano ang ibig sabihin ng HTML?",
        a: 'How To Make Lumpia',
        b: 'Hyper Text Math Language',
        c: 'Hypertext Markup Language',
        d: 'How To Make Longganisa',
        correct: 'c'
    }, {
      question: "Ano ang ibig sabihin ng CSS?",
        a: 'Counter Strike Super',
        b: 'Cascading Style Sheets',
        c: 'Cascading Stuck Shit',
        d: 'Counter Strike Supreme',
        correct: 'b'
    }, {
      question: "Sinong Celebrity couple ang naghiwalay nitong nakaraang December 2023?",
        a: 'Maine at Alden',
        b: 'Kathryn at Daniel',
        c: 'Andrea at Daniel',
        d: 'Carmina at Rustom',
        correct: 'b'
    }, {
      question: "Anong tawag kapag maliit ang itlog tapos yung isa malaki?",
        a: 'Luslos',
        b: 'Pisak',
        c: 'Sunny side-up',
        d: 'Omelette',
        correct: 'a'
    }, {
      question: "Ano ang title ng kanta sa video ni Katrina Halili at Hayden Kho?",
        a: 'I Wanna Dance with Somebody',
        b: 'Blank Space',
        c: 'Macarena',
        d: 'Careless Whisper',
        correct: 'd'
    },

    {
      question: "Ilan ang anak ni Dannica Palaypay?",
        a: 'Tatlo',
        b: 'Dalawa',
        c: 'Isa',
        d: 'Wala',
        correct: 'a'
    }, 
  ];
  
  const quizResult = document.getElementById('.quizResult');
  const questionEl = document.getElementById("question");
  const answers = document.querySelectorAll('.answers');
  const a_answer = document.getElementById("a_answer");
  const b_answer = document.getElementById("b_answer");
  const c_answer = document.getElementById("c_answer");
  const d_answer = document.getElementById("d_answer");

  const submitBtn = document.getElementById("submit");

  let currentQuiz = 0;
 
  let score = 0;
 
  loadQuiz();

  function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;
  }
  
  function getAnswer() {
    let answer = undefined;

    answers.forEach((answers) => {
      if (answers.checked) {
        answer = answers.id;
      }
  });

    return answer;
}

function deselectAnswers() {
  answers.forEach((answers) => {
    answers.checked = false;
  });
}

  submitBtn.addEventListener('click', () => {
   

    const answers = getAnswer();

    if (answers === quizData[currentQuiz].correct) {
      score++;
    }

    if (answers) {
        currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      }
      else {
        quiz.innerHTML = `<h2>Nasagutan mo ng tama ang ${score}/${quizData.length} mga tanong.</h2>`;
      }    
    }
    });

    

