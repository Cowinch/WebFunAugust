//were learning about Math.floor
// console.log(Math.floor(5.5));

Math.floor(Math.random()*20);

function generateRandomNumber(min, max){
    return Math.floor(Math.random()*(max - min +1)+min);
}

// console.log(generateRandomNumber(5,10));


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function eightBall(){
    let i=Math.floor(Math.random()*(lifesAnswers.length*1+1)+1);
    return lifesAnswers[i];
}

console.log(eightBall());