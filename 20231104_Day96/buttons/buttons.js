//  declare variables, linked to content on the application site.
const leftTerm = document.getElementById("leftTerm");
const rightTerm = document.getElementById("rightTerm");
const scoreContainer = document.getElementById("score");
const userInputAnswer = document.getElementById("inputDisplay");
const currentRoundContainer = document.getElementById('currentRound');
const maxRoundContainer = document.getElementById('maxRounds');
const gameHistory = {round: '', attempts: '', assignment: ''}
let score =0;
let currentRound = 0;
const maxRounds = 5;
let solution;
let attempts;
