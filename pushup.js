//declare variables

//these will be used with our set timeout to determine how long the interval will be
var resetDelay = 2000;
var countDownDelay = 1000;
//assigning variables to refrence and change the html
var countEl = document.getElementById("count-el");
var timerEL = document.getElementById("timer-el");
//number variables that change depending on what is happening later on
var count = 0;
var time = 120;
var intervalClear;
var startPressed = 0;
//this function is called when the "count-el" button is pressed
function increment() {
  if (count === 0) {
    //this is changing just the text of the element
    countEl.textContent = "1 Push-up";
    //console.log for testing purposes
    console.log("1 Push-up");
  }
  if (count === 1) {
    countEl.textContent = "2 Push-ups";
    console.log("2 Push-ups");
    count = count + 1;
  }
  if (count > 1) {
    countEl.textContent = count + " Push-ups";
    console.log("Push-ups " + count);
  }
  count = count + 1;
}
//function to be invoked when start button is pressed
function countDown() {
  console.log("boop");
  console.log(startPressed);
  //had to put this statement in otherwise it would start multiple counters
  if (startPressed === 0) {
    if (time > 0) {
      intervalClear = setInterval(minusSecond, [countDownDelay]);
      startPressed++;
    } else {
      timerEL.textContent = "STOP";
    }
  } else {
    console.log("already pressed");
  }
}
//function to be invoked when reset button is pressed
function reset() {
  //reset numerical values
  count = 0;
  time = 120;
  //updates on webpage
  countEl.textContent = "Push-ups Reset";
  //this timeout allows us to display different text at different times to the same place
  setTimeout(function () {
    countEl.textContent = "Zero Push-ups";
  }, resetDelay);
  timerEL.textContent = "120 SECONDS REMAIN";
  //VERY IMPORTANT it stops the counter
  clearInterval(intervalClear);
  startPressed = 0;
}
//function invoked when intervalClear is set to the value of setInterval
function minusSecond() {
  if (time > 0) {
    time = time - 1;
    timerEL.textContent = time;
  } else {
    timerEL.textContent = "STOP";
    clearInterval(intervalClear);
  }
}
