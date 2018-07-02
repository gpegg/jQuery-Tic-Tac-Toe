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
// define an array filled with false, which will be used to stop from changing an X to an O and viceversa.
const checked = [false,false,false,false,false,false,false,false,false];
// array of boxes defined via id
const boxids = [$box1, $box2, $box3, $box4, $box5, $box6, $box7, $box8, $box9];

// Define function 'tic' and have it accept 2 parameters -> count keeps track of the number of boxes checked and boxIndex is the box number
const tic = function(event, count, boxIndex) {
	// if the target of the (click) event is the correct box AND the box has not been checked...
  if (event.target == $boxes[boxIndex] && checked[boxIndex] === false) {
	// if the count is at 0 or the count is even
    if ( count === 0 || count % 2 === 0 ) {
	  // The target of the event (the box clicked) becomes an 'X'
      $(event.target).html($x);
	  // add to the count
      count += 1;
	// else (if the count does not equal 0 or an even number)
    } else {
	  // The target of the event (the box clicked) becomes an 'X'
      $(event.target).html($o);
	  // add to the count
      count += 1;
    }
	// set the counter for equal to count for use outside of the function
    counter = count;
	// set the array object with the index corresponding to the box number to true so it cannot be checked again
    checked[boxIndex] = true;
  }
  // if the first row is filled with 'X' or 'O'...
  if (($box1.html() === $x && $box2.html() === $x && $box3.html() === $x) || ($box1.html() === $o && $box2.html() === $o && $box3.html() === $o)) {
	// set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $row1.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box1.html() === $x) {
	  // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the second row is filled with 'X' or 'O'...
  if (($box4.html() === $x && $box5.html() === $x && $box6.html() === $x) || ($box4.html() === $o && $box5.html() === $o && $box6.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $row2.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box4.html() === $x) {
	  // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the third row is filled with 'X' or 'O'...
  if (($box7.html() === $x && $box8.html() === $x && $box9.html() === $x) || ($box7.html() === $o && $box8.html() === $o && $box9.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $row3.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box7.html() === $x) {
	  // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the left to right diagonal is filled with 'X' or 'O'...
  if (($box1.html() === $x && $box5.html() === $x && $box9.html() === $x) || ($box1.html() === $o && $box5.html() === $o && $box9.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $box1.css('background-color', 'rgba(0,255,0,0.5)');
    $box5.css('background-color', 'rgba(0,255,0,0.5)');
    $box9.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box1.html() === $x) {
      // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the right to left diagonal is filled with 'X' or 'O'...
  if (($box7.html() === $x && $box5.html() === $x && $box3.html() === $x) || ($box7.html() === $o && $box5.html() === $o && $box3.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $box7.css('background-color', 'rgba(0,255,0,0.5)');
    $box5.css('background-color', 'rgba(0,255,0,0.5)');
    $box3.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box7.html() === $x) {
      // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the first column is filled with 'X' or 'O'...
  if (($box1.html() === $x && $box4.html() === $x && $box7.html() === $x) || ($box1.html() === $o && $box4.html() === $o && $box7.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $box1.css('background-color', 'rgba(0,255,0,0.5)');
    $box4.css('background-color', 'rgba(0,255,0,0.5)');
    $box7.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box7.html() === $x) {
      // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the second column is filled with 'X' or 'O'...
  if (($box2.html() === $x && $box5.html() === $x && $box8.html() === $x) || ($box2.html() === $o && $box5.html() === $o && $box8.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $box2.css('background-color', 'rgba(0,255,0,0.5)');
    $box5.css('background-color', 'rgba(0,255,0,0.5)');
    $box8.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box2.html() === $x) {
      // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if the third column is filled with 'X' or 'O'...
  if (($box3.html() === $x && $box6.html() === $x && $box9.html() === $x) || ($box3.html() === $o && $box6.html() === $o && $box9.html() === $o)) {
    // set winner to true
    winner = true;
	// set the color of the winning row to green to indicate the winning row
    $box3.css('background-color', 'rgba(0,255,0,0.5)');
    $box6.css('background-color', 'rgba(0,255,0,0.5)');
    $box9.css('background-color', 'rgba(0,255,0,0.5)');
	// if the winner is 'X' (checking one of the winning boxes will suffice)
    if ($box3.html() === $x) {
      // set the winning text to indicate 'X' has won
      $winnerMessage.text("X Wins!");
	// else if 'X' did not win...
    } else {
	  // set the winning text to indicate 'O' has won
      $winnerMessage.text("O Wins!");
    }
  }
  // if winner has been set to true / if there is a winner...
  if (winner === true) {
    // alert the players there has been a winner
    alert('There has been a winner');
	// add one to the counter so nothing else can happen
    counter += 1;
	// Remove :hover psuedo class for after game
	$.each($boxes, function(i, v) {
		boxids[i].removeClass('hover');
	});
  }
  // And if all tiles have been filled...
  else if ( counter === 9 ) {
    // and if there is no winner
    if (winner === false) {
      // alert the players that there is no winner
      alert('The board has been filled and there is no winner.');
      // and print out the "no one wins" message to the page
      $winnerMessage.text('Game Over - No one wins');
	  // add one to the counter so nothing else can happen
      counter += 1;
	  // Remove :hover psuedo class for after game
	  $.each($boxes, function(i, v) {
		boxids[i].removeClass('hover');
	  });
    }
  }
};

$boxes.on('click', function(event){
  // For each box...
  $boxes.each(function(index) {
    if (winner === false) {
      // Run the Tic function
      tic(event, counter, index);
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
