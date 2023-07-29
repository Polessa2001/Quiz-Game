button = document.getElementById("saveScoreBtn");
username = document.getElementById("username");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
finalScore.innerText = mostRecentScore;
console.log(finalScore.innerText);

username.addEventListener("keyup", () => {
  button.disabled = !username.value;
});

saveHighScore = event => {
  event.preventDefault();
  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
