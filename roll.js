var Results = [], playerScoreArr = [], arr = [];

var saved1Arr = [], saved2Arr = [], saved3Arr = [];
    saved4Arr = [], saved5Arr = [];

var click1Count = [],click2Count = [],click3Count = []
    click4Count = [], click5Count = [];

var die1Txt, die2Txt, die3Txt, die4Txt, die5Txt,
    score, dice1, dice2, dice3,dice4,diceString;

const ctrDiv =`<div class="btn-group" role="group" aria-label="...">
  <button type="button" id="roll" class="space btn btn-default">Roll Dice</button>
  <button type="button" id="currentRoll" class="space btn btn-default">Save Current Roll</button>
  <button type="button" class="space btn btn-default">Right</button>
</div>`;
const ctrl = document.querySelector('div #controls');
ctrl.innerHTML = ctrDiv
const thead = document.querySelector('thead th');
const saveTurnBtn = document.querySelector('#currentRoll');

// FUNCTION TO CREATE ELEMENTS
function createElement(el, attr, attrValue) {
  var newElement = document.createElement(el);
  newElement.setAttribute(attr, attrValue);
  return newElement;
}
/* ============================================
            User Interface
============================================ */

// CREATE ROLL DISPLAY
const tbody = document.querySelector('tbody');
for (var i = 0; i < 5; i++) {
  const td = createElement('td', 'class', 'diceBlock');
  const btn = createElement('button', 'class', 'diceClick');
  const tdDiv = createElement('div', 'class', 'diceNumber')
  btn.textContent = 'Save Die #'+(i + 1)+' roll';
  td.appendChild(btn);
  td.appendChild(tdDiv);
  tbody.appendChild(td);
}

// Dice number display Array
const diceNumber = document.querySelectorAll('.diceBlock');

// INITIALIZE DICE VALUE
var dice1 = document.querySelectorAll('.diceNumber')[0];
var dice2 = document.querySelectorAll('.diceNumber')[1];
var dice3 = document.querySelectorAll('.diceNumber')[2];
var dice4 = document.querySelectorAll('.diceNumber')[3];
var dice5 = document.querySelectorAll('.diceNumber')[4];
dice1.textContent = 0,
dice2.textContent = 0,
dice3.textContent = 0,
dice4.textContent = 0,
dice5.textContent = 0;

var count = 0;


saveTurnBtn.addEventListener('click', () => {
  document.querySelectorAll('button')[3].style.display = 'block';
  die1Txt = document.querySelectorAll('button')[3].nextSibling;
  document.querySelectorAll('button')[4].style.display = 'block';
  die2Txt = document.querySelectorAll('button')[3].nextSibling;
  document.querySelectorAll('button')[5].style.display = 'block';
  die3Txt = document.querySelectorAll('button')[3].nextSibling;
  document.querySelectorAll('button')[6].style.display = 'block';
  die4Txt = document.querySelectorAll('button')[3].nextSibling;
  document.querySelectorAll('button')[7].style.display = 'block';
  die5Txt = document.querySelectorAll('button')[3].nextSibling;
  die1Txt.innerHTML = saved1Arr[0];
  die2Txt.innerHTML = saved2Arr[0];
  die3Txt.innerHTML = saved3Arr[0];
  die4Txt.innerHTML = saved4Arr[0];
  die5Txt.innerHTML = saved5Arr[0];


  if (Results.length > 0) {
    thead.textContent = "Grand Total: "+Results[0]+" pts";

    var txtDisplay = die.nextSibling;
    for (var i = 0; i < die.length; i++) {

    }
  }else {
    saved1Arr = [];
    saved2Arr = [];
    saved3Arr = [];
    saved4Arr = [];
    saved5Arr = [];
  }
});

console.log("Results Here: "+Results);

// CLICK TO RUN MAIN DICE ROLL FUNCTION
document.querySelector('#roll').addEventListener('click', () => {
  rollDice();
  Results = [];
  if (score === 0) {
    playerScoreArr = [];
    count = 0;
    thead.textContent = '0 pts';
    document.querySelector('#score').innerHTML = "Score: 0 pts rolled";
    console.log('Game Over!');
  }else {
    document.querySelector('#score').innerHTML = "Score: "+score+"pts rolled"
    playerScoreArr.push(score);
    count++;
    console.log("Score "+score);
    console.log('Score array: '+playerScoreArr);
    var result = playerScoreArr.reduce(function(a, b) { return a + b; }, 0);
    Results.push(result);
    thead.textContent = "Grand Total: "+result+" pts";
    document.querySelector('#count').innerHTML = "Rolls rolled: "+count
    console.log("HERE IS THE PLAYER SCORE: "+result);
  }
});



for (var i = 0; i < diceNumber.length; i++) {
  const notSaved = 'Save Die #'+(i + 1)+' roll';
  const saved = 'Die #'+(i + 1)+' saved!';
  var die = diceNumber[i];
  var index;

  (function(index){
      die.onclick = function(e){
        var click = 0;
        index = index;
        die = e.target;
        var txtDisplay = die.nextSibling;
        console.log("DIE #"+(index+1)+": rolled a "+ txtDisplay.innerHTML);
        // console.log(die);
        switch(index) {
            case 0:
                var a = txtDisplay.innerHTML;
                saved1Arr.push(Number(a));
                die.style.display = 'none';
                click+1;
                click1Count.push(click);
                break;
            case 1:
                var b = txtDisplay.innerHTML;
                saved2Arr.push(Number(b));
                die.style.display = 'none';
                click+1;
                click2Count.push(click);
                break;
            case 2:
                var c = txtDisplay.innerHTML;
                saved3Arr.push(Number(c));
                die.style.display = 'none';
                click+1;
                click3Count.push(click);
                break;
            case 3:
                var d = txtDisplay.innerHTML;
                saved4Arr.push(Number(d));
                die.style.display = 'none';
                click+1;
                click4Count.push(click);
                break;
            case 4:
                var e = txtDisplay.innerHTML;
                saved5Arr.push(Number(e));
                die.style.display = 'none';
                click+1;
                click5Count.push(click);
                break;
            default:
                console.log();
        }
        console.log(die);
        if(die.textContent == saved){
          die.removeAttribute('class', 'saved');
          die.textContent = notSaved;
          saved1Arr = [];
          saved2Arr = [];
          saved3Arr = [];
          saved4Arr = [];
          saved5Arr = [];

          var selected = document.querySelectorAll('div .diceNumber');
          console.log(selected);

          for (var i = 0; i < selected.length; i++) {
            console.log('Goodboy'+ index);
            selected[i].addEventListener('click', (e) => {
              console.log("Target here: "+e.target);
              console.log(arr);
              selected[i] = e.target;
              console.log(selected[i].innerHTML);

            })
          }
        }
         else if(die.textContent == notSaved) {
            die.setAttribute('class', 'saved');
            die.textContent = saved;

            diceString = txtDisplay.innerHTML
            console.log(diceString);
        }
      }
  })(i);
}




// HELPER FUNCTION: CREATE AND RETURN RANDOM NUMBER
function randomNumber(){
  var num = Math.floor((Math.random() * 6) + 1);
  return num;
}
randomNumber();

/* =============================================
              HELPER FUNCTIONS
============================================= */

// HELPER FUNCTION: STORE DUPLICATE NUMBERS IN ARRAY
// AND RETURN THE ARRAY
function findDup(num, array){
  var indices = [];
  var el = num;
  var idx = array.indexOf(el);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(el, idx + 1);
  }
  return indices;
}

// HELPER FUNCTION: RETURN STORED ARRAY CONTENT
function getInsideArr(arr){
  return arr[0];
}

// HELPER FUNCTION: EITHER RUN A FUNCTION TO GET DISPLAY
// OR DISPLAY STORED CONTENT FROM AN ARRAY
function chooseText(arr,clickCountArr, el, numVar){
  if (arr.length > 0) {
    var diceText = getInsideArr(arr);
    el.textContent = diceText;
    var numVar = Number(el.textContent);
    return numVar;
  }else if (clickCountArr.length > 0) {
    el.textContent = 0;
    var numVar = Number(el.textContent);
    return numVar;
  }else {
    el.textContent = randomNumber();
    var numVar = Number(el.textContent);
    return numVar;
  }
}

// HELPER FUNCTION: RETURN SCORES STORED IN ARRAYS
function getRollScore(arr, numVar, num){
  if (arr.length === 3) {
    var numVar = num;
    return numVar;
  }else if (arr.length > 3) {
    var extra = arr.length - 3;
        numVar = num;
        numVar =+ extra * 100;
        return numVar;
  }else {
        numVar = 0;
        return numVar;
  }
}





/* ==================================================
                MAIN FUNCTION
================================================== */
// FUNCTION TO ROLL DICE
function rollDice(){

  // CLEAR ROLLS ARRAY
  arr = [];

  // GET ROLL NUMBERS TO PUT IN ROLLS ARRAY
  if (saved1Arr.length > 0) {
    // alert('Saved 1')
    var d1 =0;
  }else {
    var d1 = chooseText(saved1Arr,click1Count,dice1,d1);
  }

  if (saved2Arr.length > 0) {
    // alert('Saved 1')
    var d2 =0;
  }else {
    var d2 = chooseText(saved2Arr,click2Count,dice2,d2);
  }

  if (saved3Arr.length > 0) {
    // alert('Saved 1')
    var d3 =0;
  }else {
    var d3 = chooseText(saved3Arr,click3Count,dice3,d3);
  }

  if (saved4Arr.length > 0) {
    // alert('Saved 1')
    var d4 =0;
  }else {
    var d4 = chooseText(saved4Arr,click4Count,dice4,d4);
  }

  if (saved5Arr.length > 0) {
    // alert('Saved 1')
    var d5 =0;
  }else {
    var d5 = chooseText(saved5Arr,click5Count,dice5,d5);
  }



  console.log(d5);
  arr.push(d1, d2, d3, d4, d5);
  console.log(arr);

  // ARRAYS STORING DUPLICATE NUMBERS
  var indices1 = findDup(1,arr);
  var indices2 = findDup(2,arr);
  var indices3 = findDup(3,arr);
  var indices4 = findDup(4,arr);
  var indices5 = findDup(5,arr);
  var indices6 = findDup(6,arr);

  // ROLLED ONES CONDITIONS AND RETURN VALUE
  if (indices1.length === 3) {
    var ones = 1000;
  }else if (indices1.length === 4) {
        ones =  1100;
  }else if (indices1.length === 5) {
        ones = 10000;
    console.log("YOU WON!!");
  }else if (indices1.length < 3  && indices1.length !== 0) {
        ones = indices1.length * 100;
  }else {
      ones = 0;
  }

  // ROLLED FIVES CONDITIONS AND RETURN VALUE
  if (indices5.length === 3) {
    var fives = 500;
  }else if (indices5.length === 4) {
      fives = 600;
  }else if (indices5.length === 5) {
      fives = 700;
  }else if (indices5.length < 3  && indices5.length !== 0) {
      fives = indices5.length * 50;
  }else {
      fives = 0;
  }

  // GET REMAING NUMBER VALUES
  var twos = getRollScore(indices2, threes, 200);
  var threes = getRollScore(indices3, threes, 300);
  var fours = getRollScore(indices4, fours, 400);
  var sixes = getRollScore(indices6, sixes, 600);

  score = (Number(ones)+Number(twos) + Number(threes)+ Number(fours) + Number(fives)+ Number(sixes));
  console.log("NUMBERS ROLLED ARRAY: "+arr);

  // RETURN SCORE
  return score;
}
