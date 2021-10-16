var btn = document.getElementById("btn");
var div = document.getElementById("div");

var score = 0;
function popQuiz(){
    
    var question1 = prompt("How many seasons of Friends are there?");
    console.log(question1);
    if(question1 == 10){
        console.log("You are right");
        score =score +1;
        console.log("score: "+score)
    }
    else{
        console.log("You are wrong");
        score =score -1;
        console.log("score: "+score)
    }
    
    var question2 = prompt("What is Joey's fav food?")
    console.log(question2);
    if(question2 == "sandwiches"){
        console.log("You are right");
        score =score +1;
        console.log("score: "+score)
        
    }
    else{
        console.log("You are wrong");
        score =score -1;
        console.log("score: "+score)
    }
    
    var question3 = prompt("What is Chandeler's job?") 
    console.log(question3);
    if(question3 ==  "transponster"){
        console.log("You are right");
        score = score+1;
        console.log("score: "+score);
    }
    else{
        console.log("You are wrong");
        score =score -1;
        console.log("score: "+score)
    }
    var question4 = prompt("What is the name of Joey's imaginary friend?") 
    console.log(question4);
    if(question4 ==  "Maurice"){
        console.log("You are right");
        score = score+1;
        console.log("score: "+score);
    }
    else{
        console.log("You are wrong");
        score =score -1;
        console.log("score: "+score)
    }
    
    div.innerHTML = `<h1>Your total score is ${score}</h1>`;
}    