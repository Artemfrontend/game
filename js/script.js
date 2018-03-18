var player = document.getElementById('play');
var let = document.getElementById('let');
var let2 = document.getElementById('let2');
var let3 = document.getElementById('let3');
var let4 = document.getElementById('let4');
var text = document.getElementById('text');
var text2 = document.getElementById('text2');
var i = 0;
var y = 100;
var x = 50;
var y2 = 0;
var x2 = -40;
var y3 = 100;
var x3 = -40;
var y4 = 40;
var x4 = -40;
var y5 = 40;
var x5 = -40;
function soundClick() {
  var audio = new Audio();
  audio.src = 'music/beep.wav';
  audio.autoplay = true;
}
function soundClick2() {
  var audio = new Audio();
  audio.src = 'music/crash.wav';
  audio.autoplay = true;
}
onkeydown = function (event) {
  if (event.keyCode == 38) {
    if (y >= 0, y < 160) {
      y += 20;
    } else if (y >= 160) {
      y = 160;
    }
  } else if (event.keyCode == 40) {
    if (y <= 160, y > 0) {
      y += -20;
    } else if (y >= 0) {
      y = 0;
    }
  } else if (event.keyCode == 39) {
    if (x >= 10, x < 250) {
      x += 20;
    } else if (x >= 250) {
      x = 250;
    }
  } else if (event.keyCode == 37) {
    if (x <= 250, x > 10) {
      x += -20;
    } else if (x >= 10) {
      x = 10;
    }
  }
  player.style.bottom = y + 'px';
  player.style.left = x + 'px';
}
function rect2Rect(player, let) {
  return (player.offsetLeft <= let.offsetLeft + let.offsetWidth && player.offsetLeft + player.offsetWidth >= let.offsetLeft && player.offsetTop + player.offsetHeight >= let.offsetTop && player.offsetTop <= let.offsetTop + let.offsetHeight);
}
function rect2Rect2(player, let2) {
  return (player.offsetLeft <= let2.offsetLeft + let2.offsetWidth && player.offsetLeft + player.offsetWidth >= let2.offsetLeft && player.offsetTop + player.offsetHeight >= let2.offsetTop && player.offsetTop <= let2.offsetTop + let2.offsetHeight);
}
function rect2Rect3(player, let3) {
  return (player.offsetLeft <= let3.offsetLeft + let3.offsetWidth && player.offsetLeft + player.offsetWidth >= let3.offsetLeft && player.offsetTop + player.offsetHeight >= let3.offsetTop && player.offsetTop <= let3.offsetTop + let3.offsetHeight);
}
function rect2Rect4(player, let4) {
  return (player.offsetLeft <= let4.offsetLeft + let4.offsetWidth && player.offsetLeft + player.offsetWidth >= let4.offsetLeft && player.offsetTop + player.offsetHeight >= let4.offsetTop && player.offsetTop <= let4.offsetTop + let4.offsetHeight);
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
document.getElementById('go').onclick = function game() {
  function spd() {
    if (x2 < 300) {
      x2++;
      setTimeout(arguments.callee, 1);
    } else if (x2 = 300) {
      i++;
      soundClick();
      x2 = -40;
      y2 = getRandomArbitrary(0, 160);
      spd();
    }
    if (!rect2Rect(player, let)) {
      setTimeout(function () {
        player.style.left = player.offsetLeft;
        let.style.top = let.offsetTop;
      }, 50);
    } else {
      soundClick2();
      text2.style.display = 'block';
      setTimeout("location.reload()", 1200);
    }
    let.style.bottom = y2 + 'px';
    let.style.right = x2 + 'px';
    text.innerHTML = i;
  }
  spd();
  function spd2() {
    if (x3 < 300) {
      x3++;
      setTimeout(arguments.callee, 5);
    } else if (x3 = 300) {
      i++;
      soundClick();
      x3 = -40;
      y3 = getRandomArbitrary(0, 160);
      spd2();
    }
    if (!rect2Rect2(player, let2)) {
      setTimeout(function () {
        player.style.left = player.offsetLeft;
        let2.style.top = let2.offsetTop;
      }, 50);
    } else {
      soundClick2();
      text2.style.display = 'block';
      setTimeout("location.reload()", 1200);
    }
    let2.style.bottom = y3 + 'px';
    let2.style.right = x3 + 'px';
    text.innerHTML = i;
  }
  setTimeout(spd2, 5000);
  function spd3() {
    if (x4 < 300) {
      x4++;
      setTimeout(arguments.callee, 9);
    } else if (x4 = 300) {
      x4 = -16;
      y4 = getRandomArbitrary(0, 184);
      spd3();
    }
    if (!rect2Rect3(player, let2)) {
      setTimeout(function () {
        player.style.left = player.offsetLeft;
        let3.style.top = let3.offsetTop;
      }, 50);
    } else {
      soundClick2();
      text2.style.display = 'block';
      setTimeout("location.reload()", 1200);
    }
    let3.style.bottom = y4 + 'px';
    let3.style.right = x4 + 'px';
    text.innerHTML = i;
  }
  setTimeout(spd3, 9000);
  function spd4() {
    if (x5 < 300) {
      x5++;
      setTimeout(arguments.callee, 9);
    } else if (x5 = 300) {
      x5 = -16;
      y5 = getRandomArbitrary(0, 184);
      spd4();
    }
    if (!rect2Rect4(player, let4)) {
      setTimeout(function () {
        player.style.left = player.offsetLeft;
        let4.style.top = let4.offsetTop;
      }, 50);
    } else {
      soundClick2();
      text2.style.display = 'block';
      setTimeout("location.reload()", 1200);
    }
    let4.style.bottom = y5 + 'px';
    let4.style.right = x5 + 'px';
    text.innerHTML = i;
  }
  setTimeout(spd4, 12000);
}