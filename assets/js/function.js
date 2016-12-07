function time() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var arr = [hours, minutes, seconds].map(function(num) {
    return num < 10 ? '0' + num : String(num);
  });
  hours = arr[0];
  minutes = arr[1];
  seconds = arr[2];

  return hours + minutes + seconds;
}

function output(time) {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = "AM";
  var color = '#' + time;
  if (hours >= 0 && hours <= 11) {
    var ampm = "AM";
  } else if (hours >= 12 && hours <= 23) {
    var ampm = "PM";
  };
  if (hours < 10) {
    var hours = "0" + hours;
  } else if (hours > 12 && hours <= 21) {
    var hours = "0" + (hours - 12);
  } else if (hours > 21) {
    var hours = (hours - 12);
  } else {
    var hours = hours;
  };
  if (minutes < 10) {
    var minutes = "0" + minutes;
  } else {
    var minutes = minutes;
  };
  if (hours == 0) {
    var hours = "01";
  };
  if (seconds < 10) {
    var seconds = "0" + seconds;
  } else {
    var seconds = seconds;
  };
  document.getElementById("circle").style.backgroundColor = color;
  document.getElementById("circle").innerHTML = "<h2 class='time'>" + hours + ':' + minutes + ':' + seconds + " " + ampm + "</h2><h3 class='hex-code'>" + color + "</h3>";
  document.getElementById("circle").style.color = 'white';
}

function startClick(callback) {
  document.getElementById("circle").addEventListener('dblclick', function(event) {
    callback();
  });
}

function stopClick(callback, name) {
  document.getElementById("circle").addEventListener('click', function(event) {
    callback(name);
  });
}

function init() {
  var tick = setInterval(function() { output(time())}, 1000);
  stopClick(clearInterval, tick);
  startClick(init);
}

init();
