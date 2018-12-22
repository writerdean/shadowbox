var turn = 0
var board = document.querySelector('.board')
var squares = document.querySelectorAll('.square')

var boxOne = document.querySelector('.boxOne')
var boxTwo = document.querySelector('.boxTwo')
var boxThree = document.querySelector('.boxThree')

var colorBoxOne = 'white'
var colorBoxTwo = 'white'
var colorBoxThree = 'white'
var color = 'white'

var randomColor = ["red", "yellow", "orange", "blue", "green", "purple"]

function randomColorGenerator() {
  var index = Math.floor((Math.random() * 5))
  color = randomColor[index]
}

//  this listens for a clicked square, and if not already clicked, will change the background to a random color
var chooseSquare = function(event) {
  
    if (event.target.classList.contains('square')) {
      if (event.target.classList.contains('clicked')) {
        alert('Please choose another square')
        return
      } else 
      if(turn < 3) {
        turn++
        console.log('choice ' + turn)
        randomColorGenerator()
        event.target.classList.add('clicked')
        event.target.classList.remove('white')
        event.target.style.backgroundColor = color
        console.log(color)
        if (colorBoxOne != 'white' & colorBoxTwo != 'white') {
          // this is now box three
          event.target.classList.add('boxThree')
          console.log('boxThree class added')
          colorBoxThree = color
          // doColorsMatch()
        } else if (colorBoxOne != 'white' & colorBoxTwo == 'white') {
          // this is now box two
          console.log('boxTwo class added')
          event.target.classList.add('boxTwo')
          colorBoxTwo = color
        } else {
          // this is box one
          console.log('boxOne class added')
          event.target.classList.add('boxOne')
          colorBoxOne = color
        }
      } else {
        console.log('turn done')
        turn = 0
        doColorsMatch()
      }
    }

    // this checks if the three boxes match colors at all
function doColorsMatch() {
  console.log('doColorsMatch function called')
  if(document.querySelector('.boxOne').style.backgroundColor === document.querySelector('.boxTwo').style.backgroundColor) {
    console.log('boxes 1 and 2 match')
    document.querySelector('.boxThree').classList.remove('clicked')
    document.querySelector('.boxThree').classList.add('white')
    document.querySelector('.boxThree').style.backgroundColor = 'white'
    document.querySelector('.boxThree').classList.remove('.boxThree')
  } else if (document.querySelector('.boxOne').style.backgroundColor === document.querySelector('.boxThree').style.backgroundColor) {
    document.querySelector('.boxTwo').classList.remove('clicked')
    document.querySelector('.boxTwo').classList.add('white')
    document.querySelector('.boxTwo').style.backgroundColor = 'white'
    document.querySelector('.boxTwo').classList.remove('.boxTwo')
  } else if (document.querySelector('.boxTwo').style.backgroundColor === document.querySelector('.boxThree').style.backgroundColor) {
    console.log('boxes 2 and 2 match')
    document.querySelector('.boxOne').classList.remove('clicked')
    document.querySelector('.boxOne').classList.add('white')
    document.querySelector('.boxOne').style.backgroundColor = 'white'
    document.querySelector('.boxOne').classList.remove('.boxOne')
  } else {
    document.querySelector('.boxOne').style.backgroundColor = 'white'
    document.querySelector('.boxTwo').style.backgroundColor = 'white'
    document.querySelector('.boxThree').style.backgroundColor = 'white'
    document.querySelector('.boxThree').classList.remove('.clicked')
    document.querySelector('.boxTwo').classList.remove('.clicked')
    document.querySelector('.boxOne').classList.remove('.clicked')
    document.querySelector('.boxOne').classList.remove('.boxOne')
    document.querySelector('.boxTwo').classList.remove('.boxTwo')
    document.querySelector('.boxThree').classList.remove('.boxThree')
    colorBoxOne = 'white'
    colorBoxTwo = 'white'
    colorBoxThree = 'white'
    return
  }
}
  }
board.addEventListener('click', chooseSquare)


// module.exports = app

// each turn consists of three clicks
// after the third click (and color displayed), doColorsMatch is called
// if any two of the colors match, they remain, while the third color turns back to white
// at THIS point, all classes should have the box class removed

// functon takeTurn - this involves three clicks, each click the box changes color.  after three clicks, the turn is over.  now call doColorsMatch function
//function doColorsMatch = check to see if any of the two colors match, if true, the two matching colors remain, and the false (non-matching) color turns back to white.
// all squares have the box class removed now
// all with false classlist
