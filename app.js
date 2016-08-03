$(document).ready(function () {

  var colorsArray = ['navy', 'purple', 'red', 'orange', 'yellow', 'green', 'black', 'grey'];
  var randNum;
  var randColor;
  var boxCount = 4;  // number of colored boxes to start out with

  addColorDivs();
  randomColor();

  $('#container').on('click', '.box', function () {
    if ($(this).hasClass(randColor)) {
      $('#answer').text('Hey! Good Work, how about we play again?');
      // $(this).addClass('correctColor');
      // // originalColor();
      addButton();
    } else {
      $('#answer').text('Nice try, but that is the incorrect color. Try again!');
    }
  });

  $('.addBox').on('click', addNewBox);
  $('.removeBox').on('click', removeLastBox);

  $('#playAgain').on('click', '.playNewGame', startNewGame);

  function addColorDivs() {
    var newArray = colorsArray.slice(0, boxCount);
    // creates a new array based on boxCount

    newArray.forEach(function (currentColor, i) {
      //append new div elements with the class box and currentColor to the DOM
      $('#container').append('<div class="box ' + currentColor + '"</div>');
      $('.' + currentColor + '').css('background-color', currentColor);
      //add the currentColor to the background-color to style each div
    });

  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  function randomColor() {
    randNum = randomNumber(1, boxCount);
    switch (randNum) {
      case 1:
        randColor = 'navy';
        break;
      case 2:
        randColor = 'purple';
        break;
      case 3:
        randColor = 'red';
        break;
      case 4:
        randColor = 'orange';
        break;
      case 5:
        randColor = 'yellow';
        break;
      case 6:
        randColor = 'green';
        break;
      case 7:
        randColor = 'black';
        break;
      case 8:
        randColor = 'grey';
    }
    $('#randomColor').text(randColor);
  }

  function addButton() {
    $('#playAgain').append('<button class="playNewGame">Play Again</button>');
  }

  function startNewGame() {
    $('#answer').text('');
    randomColor();
    $('.playNewGame').remove();
  }

  function addNewBox() {
    if (boxCount <= 8 && boxCount >= 0) {
      boxCount++;
      $('.box').remove();
      $('.playNewGame').remove();
      addColorDivs();
      randomColor();
    }
  }

  function removeLastBox() {
    if (boxCount <= 8 && boxCount >= 0) {
      boxCount--;
      $('.box').remove();
      $('.playNewGame').remove();
      addColorDivs();
      randomColor();
    }
  }

  // function originalColor() {
  //   window.setTimeout(slowAlert, 2000);
  //   $('box').toggleClass('correctColor');
  // }

});
