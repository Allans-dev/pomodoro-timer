var workTime = 25;
var breakTime = 5;
var interval;
var timeLeft;
var setTime;
var pause = 0;
var togglePause = 0;
var togglework = 0;

//assigning input values
function showBreakVal(){
  breakTime = document.getElementById('slider').value;
  document.querySelector("#breakVal").innerHTML = breakTime + " min of freedom";
}
function workVal(){
  workTime = document.getElementById('workBox').value;
  document.querySelector("#display").innerHTML = workTime + ':00';
}

//onload display timer
window.onload = function(){
document.querySelector("#display").innerHTML = workTime + ':00';
}

//setting times
function setWorkTime (){
  setTime = new Date().getTime() + workTime*60000;
}
function setBreakTime (){
  setTime = new Date().getTime() + breakTime*60000;
}

//timer function toggle pause
function timer(){
  setWorkTime();
  if (togglePause == 0){
  intervalFunction();
  togglePause += 1;
}else {
  pause = timeLeft;
  clearInterval(interval);
  togglePause = 0;
}
}

//countdown interval function
function intervalFunction(){
//check if pause and calculation
  if (pause > 0){
    setTime = new Date().getTime() + pause;
  }
//counting time
  interval = window.setInterval(function () {
  var now = new Date().getTime();
// calculating and display time left
  timeLeft = setTime - now;
  var minutes = Math.floor(timeLeft/60000);
  var seconds = Math.floor(timeLeft%(1000*60)/1000);
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  if (seconds > 0){
  document.getElementById('display').innerHTML = minutes + ":" + seconds;
}else{
  document.getElementById('display').innerHTML = "0:00";
}
  //determining next break/work time and executing alarm
  if (togglework == 0 && Math.round(timeLeft) < 1){
    setBreakTime();
    pause = 0;
    togglework += 1;
    document.body.style.backgroundImage = "url('http://i.imgur.com/Cgod5ns.jpg')";
    document.querySelector("#work").style.display = "none";
    document.querySelector("#break").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector('#display').style.marginTop = "85%";
    document.querySelector('#display').style.color = "white";
    document.querySelector('#timer').style.marginLeft = "0px";
    document.querySelector('#timer').style.maxHeight = "850px";
    document.querySelector('#timer').style.float = "none";
    document.querySelector('#buttons').style.marginLeft = "0%";
    document.querySelector('#buttons').style.width = "43%"
    document.querySelector('#reset').style.backgroundColor = "#01597D";
    document.querySelector('#reset').style.borderColor = "#01597D";
    document.querySelector('#reset').style.color = "white";
    document.querySelector('#buttons').style.float = "none";
    alert("Freeeeedooom!!!")
  }else if (togglework == 1 && Math.round(timeLeft) < 1){
    setWorkTime();
    pause = 0;
    togglework = 0;
    document.body.style.backgroundImage = "url('http://i.imgur.com/rcWfMqu.jpg')";
    document.querySelector("#work").style.display = "block";
    document.querySelector("#break").style.display = "block";
    document.querySelector("h1").style.display = "block";
    document.querySelector('#display').style.color = "black";
    document.querySelector('#display').style.marginTop = "90px";
    document.querySelector('#timer').style.marginLeft = "14%";
    document.querySelector('#timer').style.maxHeight = "270px";
    document.querySelector('#timer').style.float = "left";
    document.querySelector('#buttons').style.marginLeft = "50%";
    document.querySelector('#buttons').style.float = "left"
    document.querySelector('#buttons').style.width = "45%"
    document.querySelector('#reset').style.backgroundColor = "#AFAFAF";
    document.querySelector('#reset').style.borderColor = "#AFAFAF"
    document.querySelector('#reset').style.color = "black";
    alert("get back to work!!")
  }
  }, 1000);
  }

//stop and clear reset function
function reset(){
 clearInterval(interval);
 document.querySelector('#display').innerHTML = workTime + ":00";
 pause = 0;
 if (togglework == 1){
   document.body.style.backgroundImage = "url('http://i.imgur.com/rcWfMqu.jpg')";
   document.querySelector("#work").style.display = "block";
   document.querySelector("#break").style.display = "block";
   document.querySelector("h1").style.display = "block";
   document.querySelector('#display').style.color = "black";
   document.querySelector('#display').style.marginTop = "90px";
   document.querySelector('#timer').style.marginLeft = "14%";
   document.querySelector('#timer').style.maxHeight = "270px";
   document.querySelector('#timer').style.float = "left";
   document.querySelector('#buttons').style.marginLeft = "50%";
   document.querySelector('#buttons').style.float = "left"
   document.querySelector('#buttons').style.width = "45%"
   document.querySelector('#reset').style.backgroundColor = "#AFAFAF";
   document.querySelector('#reset').style.borderColor = "#AFAFAF"
   document.querySelector('#reset').style.color = "black";
 }
 togglework = 0;
 togglePause = 0;
 workVal();
}
