var questions = [{question: "Who is most likely to wear a dinosaur shirt?"}, 
                 {question: "Who served in the US Air Force?"}, 
                 {question: "Who likes to play online chess?"},
                 {question: "Who used to groom dogs for a living?"}];
                 
var answers = {answer1: "Beth", answer2: "Sumeet", answer3: "Andrew", answer4: "Heather"};

var scores = [];

var question_info = "(Please enter the letter which corresponds to your answer.)"


//Tried to refactor by pulling repetitive code into function, but it's not working - returns undefined. 
var answerOptions = ("\nA. " + 
  answers.answer1 + "\nB. " + 
  answers.answer2 + "\nC. " + 
  answers.answer3 + "\nD. " + 
  answers.answer4);


//q1


var user_answer1 = prompt("Question 1: " + questions[0].question + "\n" + question_info + "\n" + answerOptions);
                          
                          // can make the answer section a function that we call in each question prompt.
                       
// result q1, text answer q2
                       
                       
if (user_answer1.toLowerCase() === "c." || user_answer1.toLowerCase() === "c") {
  var user_answer2 = prompt("Good job, kiddo! You were right! Here's a cupacke!" + "\n\nQuestion 2: " +
                            questions[1].question + 
                            "\n" + question_info +
                            answerOptions);
  scores.push("w");
} else {
    var user_answer2 = prompt("Are you fucking kidding me? You're a terrible person. Obviously, it's Andrew."  + "\n\nQuestion 2: " +
                              questions[1].question + 
                              "\n" + question_info +
                              answerOptions);} 

// result q2, text answer q3


if (user_answer2.toLowerCase() === "a." || user_answer2.toLowerCase() === "a") {
  var user_answer3 = prompt("Totes! You're a fantastic human being. Excellent choice." + "\n\nQuestion 3: " +
                            questions[2].question + 
                            "\n" + question_info +
                            answerOptions);
scores.push("w");                           
} else {
    var user_answer3 = prompt("Dumbass. Hello? It's Beth."  + "\n\nQuestion 3: " +
                              questions[2].question +
                              "\n" + question_info +
                              answerOptions);}

// result q3, text answer q4



if (user_answer3.toLowerCase() === "b." || user_answer3.toLowerCase() === "b") {
  var user_answer4 = prompt("You beautiful golden sunfish. You got it right! Let's run away into the ocean." + "\n\nQuestion 4: " +
                            questions[3].question +
                            "\n" + question_info +
                            answerOptions);
scores.push("w");
} else {
    var user_answer4 = prompt("I'm ashamed to call you family. You're garbage. The CORRECT answer was Sumeet."  + "\n\nQuestion 4: " +
                              questions[3].question + 
                              "\n" + question_info +
                              answerOptions);
}

// result q4, score of game

if (user_answer4.toLowerCase() === "d." || user_answer4.toLowerCase() === "d") {
  scores.push("w");
  alert("I love you. \n\nThanks for playing!\n\nYour score is: " + 
        scores.length + " correct out of " + questions.length + ", or " + (scores.length/questions.length) * 100 + "%.");
} else {
  alert("INCORRECT!! GAWSH...TINA! Eat your brain-food!! The right answer is Heather! Jeez...\n\nThanks for playing...I guess. \n\nYour score is: " + 
        scores.length + " correct out of " + questions.length + ", or " + (scores.length/questions.length) * 100 + "%.");
}
