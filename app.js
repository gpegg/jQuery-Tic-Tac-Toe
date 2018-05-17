// Define a bunch of variables for the board/page
const $game = $('#game');
const $rows = $('.row');
const $boxes = $('.box');
const $winnerMessage = $('#winner');
const $box1 = $('#box1'), $box2 = $('#box2'), $box3 = $('#box3'), $box4 = $('#box4'), $box5 = $('#box5'), $box6 = $('#box6'), $box7 = $('#box7'), $box8 = $('#box8'), $box9 = $('#box9');
const $row1 = $('#row1'), $row2 = $('#row2'), $row3 = $('#row3');
const $rulesBtn = $('#rulesBtn');
const $rules = $('.rules-container');
const $x = '<span class="X">X</span>';
const $o = '<span class="O">O</span>';
// Define a counter - used to keep track of the number of tiles set
let counter = 0;
// Define a variable "winner" - set to false - if set to true, game is over.
winner = false;
// define an array filled with truth, which will be used to stop from changing an X to an O and viceversa.
const array = [true,true,true,true,true,true,true,true,true];

// The function for the game
const tic = function(count, boxIndex) {
  if (event.target == $boxes[boxIndex] && array[boxIndex] === true) {
    if ( count === 0 || count % 2 === 0 ) {
      $(event.target).html($x);
      count += 1;
    } else {
      $(event.target).html($o);
      count += 1;
    }
    counter = count;
    array[boxIndex] = false;
  }
  if (($box1.html() === $x && $box2.html() === $x && $box3.html() === $x) || ($box1.html() === $o && $box2.html() === $o && $box3.html() === $o)) {
    winner = true;
    $row1.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box1.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box4.html() === $x && $box5.html() === $x && $box6.html() === $x) || ($box4.html() === $o && $box5.html() === $o && $box6.html() === $o)) {
    winner = true;
    $row2.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box4.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box7.html() === $x && $box8.html() === $x && $box9.html() === $x) || ($box7.html() === $o && $box8.html() === $o && $box9.html() === $o)) {
    winner = true;
    $row3.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box7.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box1.html() === $x && $box5.html() === $x && $box9.html() === $x) || ($box1.html() === $o && $box5.html() === $o && $box9.html() === $o)) {
    winner = true;
    $box1.css('background-color', 'rgba(0,255,0,0.5)');
    $box5.css('background-color', 'rgba(0,255,0,0.5)');
    $box9.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box1.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box7.html() === $x && $box5.html() === $x && $box3.html() === $x) || ($box7.html() === $o && $box5.html() === $o && $box3.html() === $o)) {
    winner = true;
    $box7.css('background-color', 'rgba(0,255,0,0.5)');
    $box5.css('background-color', 'rgba(0,255,0,0.5)');
    $box3.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box7.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box1.html() === $x && $box4.html() === $x && $box7.html() === $x) || ($box1.html() === $o && $box4.html() === $o && $box7.html() === $o)) {
    winner = true;
    $box1.css('background-color', 'rgba(0,255,0,0.5)');
    $box4.css('background-color', 'rgba(0,255,0,0.5)');
    $box7.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box7.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box2.html() === $x && $box5.html() === $x && $box8.html() === $x) || ($box2.html() === $o && $box5.html() === $o && $box8.html() === $o)) {
    winner = true;
    $box2.css('background-color', 'rgba(0,255,0,0.5)');
    $box5.css('background-color', 'rgba(0,255,0,0.5)');
    $box8.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box2.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  if (($box3.html() === $x && $box6.html() === $x && $box9.html() === $x) || ($box3.html() === $o && $box6.html() === $o && $box9.html() === $o)) {
    winner = true;
    $box3.css('background-color', 'rgba(0,255,0,0.5)');
    $box6.css('background-color', 'rgba(0,255,0,0.5)');
    $box9.css('background-color', 'rgba(0,255,0,0.5)');
    if ($box3.html() === $x) {
      $winnerMessage.text("X Wins!");
    } else {
      $winnerMessage.text("O Wins!");
    }
  }
  // if there is a winner...
  if (winner === true) {
    // alert the players there has been a winner
    alert('There has been a winner');
    counter += 1;
  }
  // And if all tiles have been filled...
  else if ( counter === 9 ) {
    // and if there is no winner
    if (winner === false) {
      // alert the players that there is no winner
      alert('The board has been filled and there is no winner.');
      // and print out the "no one wins" message to the page
      $winnerMessage.text('Game Over - No one wins');
      counter += 1;
    }
  }
};

$boxes.on('click', function(event){
  // For each box...
  $boxes.each(function(index) {
    if (winner === false) {
      // Run the Tic function
      tic(counter, index);
    }
  });
});

// Click "The Rules" to show the rules on the page and click again to hide
$rulesBtn.on('click', function() {
  // If the rules are hidden...
  if ($rules.css('display') == 'none') {
    // Show the rules via a slide down animation
    $rules.slideDown();
    // set the display to flex in order to center the rules in the middle of the page
    $rules.css('display', 'flex');
    // Change the down caret to the up caret to signify clicking will hide the rules again
    $('#downCaret').html('&#9650;');
  // If the rules are showing...
  } else {
    // Hide the rules
    $rules.slideUp();
    // Change the up caret back to the down caret
    $('#downCaret').html('&#9660;');
  }
})
