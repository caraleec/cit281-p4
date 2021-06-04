const {data} = require("./p4-data.js");
//Get questions
function getQuestions(){
    return data.map(data => data.question);
    };
console.log(getQuestions());

//Get Answers
function getAnswers(){
    return data.map(data => data.answer);
    };
console.log(getAnswers());

//Get Questions and Answers 
function getQuestionsAnswers(){
    return JSON.parse(JSON.stringify(data));
};
console.log(getQuestionsAnswers());

function getQuestion(number =""){
    let objectToReturn = {
        error: '',
        question: '',
        number: ''
    };
    if (Number.isInteger(number) == false ){
        objectToReturn.error = 'Question number must be an integer';
    }
    else if (number < 1 ){ 
        objectToReturn.error = 'Question number must be >= 1';
    }
    else if (number >= data.length+1){
        objectToReturn.error = `Question number must be less than the number of questions (${data.length+1})`;
    }
    else{
        objectToReturn.question = `${data[number-1].question}`;
        objectToReturn.number = number;
    };
    return objectToReturn;
};
console.log(getQuestion());
console.log(getQuestion(1));

function getAnswer(number =""){
    let objectToReturn = {
        error: '',
        answer: '',
        number: ''
    };
    if (Number.isInteger(number) == false ){
        objectToReturn.error = 'Answer number must be an integer';
    }
    else if (number < 1 ){ 
        objectToReturn.error = 'Answer number must be >= 1';
    }
    else if (number >= data.length){
        objectToReturn.error = `Answer number must be less than the number of questions (${data.length})`;
    }
    else{
        objectToReturn.answer = `${data[number-1].answer}`;
        objectToReturn.number = number;
    };
    return objectToReturn;
};
console.log(getAnswer());
console.log(getAnswer(1));

function getQuestionAnswer(number =""){
    let objectToReturn = {
        error: '',
        question: '',
        answer: '',
        number: ''
    };
    if (Number.isInteger(number) == false ){
        objectToReturn.error = 'Question number must be an integer';
    }
    else if (number < 1 ){ 
        objectToReturn.error = 'Question number must be >= 1';
    }
    else if (number >= data.length){
        objectToReturn.error = `Question number must be less than the number of questions (${data.length})`;
    }
    else{
        objectToReturn.question = `${data[number-1].question}`;
        objectToReturn.answer = `${data[number-1].answer}`;
        objectToReturn.number = number;
    };
    return objectToReturn;
};


/*****************************
  Module function testing
******************************/ /*
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  };
*/
  module.exports = {
    getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer
  };
