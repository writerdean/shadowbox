let turn = 1
let clicks = 1
const board = document.querySelector('.board')
const squares = document.querySelectorAll('.square')
let matchedSquares = document.querySelectorAll('.match')
let clickedSquares = document.querySelectorAll('.clicked')
let allClicks = document.querySelector('.number-of-clicks')

let boxOne = document.querySelector('.boxOne')
let boxTwo = document.querySelector('.boxTwo')
let boxThree = document.querySelector('.boxThree')

let colorBoxOne = 'white'
let colorBoxTwo = 'white'
let colorBoxThree = 'white'
let color = 'white'

const randomColor = ['blue', 'green', 'orange', 'purple', 'red', 'mistyrose','violet', 'yellow']

function randomColorGenerator() {
  var index = Math.floor((Math.random() * randomColor.length))
  color = randomColor[index]
}

//  this listens for a clicked square, and if not already clicked, will change the background to a random color
function chooseSquare() {
  console.log('starting function chooseSquare')
  console.log('turn # ' + turn)
  if (event.target.classList.contains('clicked') || event.target.classList.contains('match')) {
    alert('Please choose another square')
    return
  } else {
    turn++
    clicks++

    if (matchedSquares.length === 15) {
      color = 'black'
      console.log('color is now black')
      } else {
        console.log('calling randomColorGenerator')
        randomColorGenerator()
      }
    console.log('color generated is ' + color)
    event.target.classList.add('clicked')
    event.target.classList.remove('white')
    event.target.style.backgroundColor = color
    }
    matchedSquares = document.querySelectorAll('.match')
    clickedSquares = document.querySelectorAll('.clicked')
    console.log('match = ' + matchedSquares.length)
    console.log('clicked = ' + clickedSquares.length)
    console.log('calling checkForTurn')
    checkForTurn()
}
  

function checkForTurn () {
  console.log('starting function checkForTurn')
  let a = document.querySelectorAll('.clicked')[0]
  let b = document.querySelectorAll('.clicked')[1]

  if (matchedSquares.length === 15) {
    console.log('gameOver')
    gameOver()
  } else
  if (matchedSquares.length === 14 && clickedSquares.length === 2) {
    console.log('only 2 squares left')
    console.log('twoSquaresLeft')
    matchedSquares = document.querySelectorAll('.match')
    clickedSquares = document.querySelectorAll('.clicked')
    twoSquaresLeft()
  } else 
  if(turn === 4) {
    console.log('calling checkForMatch')
    matchedSquares = document.querySelectorAll('.match')
    clickedSquares = document.querySelectorAll('.clicked')
    checkForMatch()
  } else if (matchedSquares.length === 16) {
    console.log('calling youWin')
    youWin()
  }else{
    return
  }
}

function twoSquaresLeft() {
  console.log('starting function twoSquaresLeft')
  let a = document.querySelectorAll('.clicked')[0]
  let b = document.querySelectorAll('.clicked')[1]
  if (a.style.backgroundColor === b.style.backgroundColor) 
  {a.classList.replace('clicked', 'match'); b.classList.replace('clicked', 'match');}
  else {
    a.classList.replace('clicked', 'white')
    a.style.backgroundColor = 'white'
    b.classList.replace('clicked', 'white')
    b.style.backgroundColor = 'white'
  }
  matchedSquares = document.querySelectorAll('.match')
  clickedSquares = document.querySelectorAll('.clicked')
  turn = 1;
  if (matchedSquares.length === 16) {
    console.log('calling youWin')
    youWin()
  }
}

function checkForMatch() {
  console.log('starting function checkForMatch')
  let a = document.querySelectorAll('.clicked')[0]
  let b = document.querySelectorAll('.clicked')[1]
  let c = document.querySelectorAll('.clicked')[2]

    if (a.style.backgroundColor === b.style.backgroundColor && a.style.backgroundColor === c.style.backgroundColor) {
      a.classList.replace('clicked', 'match')
      b.classList.replace('clicked', 'match')
      c.classList.replace('clicked', 'match')

    } else if (a.style.backgroundColor === b.style.backgroundColor) 
        {c.style.backgroundColor = 'white'; c.classList.replace('clicked', 'white'); a.classList.replace('clicked', 'match'); b.classList.replace('clicked', 'match');}

      else if (b.style.backgroundColor === c.style.backgroundColor) 
        {a.style.backgroundColor = 'white'; a.classList.replace('clicked', 'white'); b.classList.replace('clicked', 'match'); c.classList.replace('clicked', 'match');}

      else if (a.style.backgroundColor === c.style.backgroundColor) 
        {b.style.backgroundColor = 'white'; b.classList.replace('clicked', 'white'); a.classList.replace('clicked', 'match'); c.classList.replace('clicked', 'match');}

      else {
        console.log('no matches')
        a.classList.replace('clicked', 'white');
        a.style.backgroundColor = 'white';
        b.classList.replace('clicked', 'white');
        b.style.backgroundColor = 'white';
        c.classList.replace('clicked', 'white');
        c.style.backgroundColor = 'white';
      }
    matchedSquares = document.querySelectorAll('.match')
    clickedSquares = document.querySelectorAll('.clicked')
    turn = 1;
}


function gameOver() {
  console.log('Sorry, you lose :(')
  matchedSquares = document.querySelectorAll('.match')
  clickedSquares = document.querySelectorAll('.clicked')
  for (i = 0; i < matchedSquares.length; i++) {
    matchedSquares[i].style.backgroundColor = 'black';
  }
}

function youWin() {
  console.log('Yay!  You won!')
  matchedSquares = document.querySelectorAll('.match')
  clickedSquares = document.querySelectorAll('.clicked')
  for (i = 0; i < matchedSquares.length; i++) {
    matchedSquares[i].style.backgroundColor = 'lime';
  }
}
document.addEventListener('click', function (event) {
  if ( event.target.classList.contains( 'square' ) ) {
    matchedSquares = document.querySelectorAll('.match')
    clickedSquares = document.querySelectorAll('.clicked')
    chooseSquare()
  }
}, false);












echo "# shadowbox" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/writerdean/shadowbox.git
git push -u origin master