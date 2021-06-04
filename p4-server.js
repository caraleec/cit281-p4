
// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require("./p4-module.js");
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax

//Question Route: Return all questions
fastify.get("/cit/question", (request, reply) => {
  let error = "";
  let statusCode = 200; 
  let questions= getQuestions();
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({questions, error, statusCode});
});

//Answer Route: Return all Answers 
fastify.get("/cit/answer", (request, reply) => {
  let error = "";
  let statusCode = 200; 
  let answer= getAnswers();
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({answer, error, statusCode});
});

// Question and Answer Route: Returns all questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
  let error = "";
  let statusCode = 200; 
  let questions_answers= getQuestionsAnswers();
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({questions_answers, error, statusCode});
});

//Question Number Route: Returns a specific question
fastify.get("/cit/question/:number", (request, reply) => {
  let numberIDFromClient = request.params.number;
  let error = "";
  let statusCode = 200; 
  let question= getQuestion(parseInt(numberIDFromClient));
  let number = parseInt(numberIDFromClient);
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({question, number, error, statusCode});
});

  //Unmatched / wildcard route
  fastify.get("*", (request, reply) => {
    let error = "Route not Found";
    let statusCode = 404;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error, statusCode});
  });


// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
