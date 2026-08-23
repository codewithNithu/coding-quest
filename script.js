let score = 0;

function startQuest() {
    document.body.innerHTML = `
        <h2>⭐ Score: <span id="score">0</span></h2>

        <h1>Level 1</h1>
        <p>Question 1</p>
        <p>Which language is used to style a webpage?</p>

        <button onclick="wrongAnswer()">HTML</button>
        <button onclick="correctAnswer()">CSS</button>
        <button onclick="wrongAnswer()">Java</button>
    `;
}

function correctAnswer() {
    score = score + 10;
    document.body.innerHTML=`
    <h2>Score:${score}</h2>
    <h1>Level 2<h1>
    <p>Question 2</p>
    <p>Which language adds interactivity to a webpage?</p>
    
<button onclick="wrongAnswer()">CSS</button>
<button onclick="wrongAnswer()">HTML</button>
<button onclick="levelTwoCorrect()">JavaScript</button>
`;
}
function levelTwoCorrect() {
score=score+10;
document.body.innerHTML=`
<h2> Score: ${score}</h2>
<h1>Level 3</h1>
<p>Question 3</p>
<p>Which language is used to create the structure of a webpage?</p>
<button onclick="wrongAnswer()">CSS</button>
<button onclick="levelThreeCorrect()">HTML</button>
<button onclick="wrongAnswer()">JavaScript</button>
`;
}
function levelThreeCorrect(){
score =score+10;
document.body.innerHTML=`
<h2>Score: ${score}</h2>
<h1>Level 4</h1>
<p>Question 4</p>
<p>Which symbol is used for a comment in JavaScript?</p>
<button onclick="levelFourCorrect()"> //</button>
<button onclick="wrongAnswer()"> ##</button>
<button onclick="wrongAnswer()"> **</button>
`;
}
function levelFourCorrect(){
score = score+10;
document.body.innerHTML=`
<h2>Score: ${score}</h2>
<h1>Level 5></h1>
<p>Question 5</p>
<p>Which HTML tag is used to create a link?</p>
<button onclick="wrongAnswer()">&lt;p&gt;</button>
<button onclick="wrongAnswer()">&lt;img&gt;</button>
<button onclick="finishQuest()">&lt;a&gt;</button>
`;
}
function finishQuest() {
score =score+10;
document.body.innerHTML=`
<h1>Quest Complete!</h1>
<h2>Final Score: ${score} / 50</h2>
<p> Congratulations! You completed all 5 questions!</p>
`;
}
function wrongAnswer(){
alert("Wrong Answer");
}