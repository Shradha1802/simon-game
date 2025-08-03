let mainBody = document.querySelector(".main_body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let start = document.querySelector(".start");
let opt = document.querySelectorAll(".option");
let click = new Audio("points.mp3");
let darkImg = document.querySelector(".dark_mode");
let mode = new Audio("Click.mp3");
let restart = document.querySelector(".restart");
let icon = document.querySelector(".icon");
let score = document.querySelector(".score span");
let highScore = document.querySelector(".high_score span")
let musicIcon = document.querySelector(".music_icon");
let soundIcon = document.querySelector(".sound_icon");
let helpBox = document.querySelector(".helpBox");
let helpIcon = document.querySelector(".help_icon");
let menuIcon = document.querySelector(".menu_icon");
let iconSoundValue = true;
let iconSound = new Audio("Icon.mp3");
let bgMusic = new Audio("bgMusic.mp3");
let bgMusicValue = true;

bgMusic.loop = true;

let level = 0;
let gameStart = false;
start.addEventListener("click", () => {
  if (!gameStart) {
    gameStart = true;
    icon.style.opacity = 1;
    ++level;
    if (iconSoundValue) {
      iconSound.play();
    }
    if (level == 1) {
      start.innerText = "Toh chaliye Shuru karte hai!!";
    }
    setTimeout(() => {
      levelUpgrade();
    }, 1800);
  }
})
start.addEventListener("mouseenter", () => {
  if (start.innerText != "Start") {
    start.style.transform = "scale(1)";
    start.style.boxShadow = "none";
  }
});

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

let levelUpgrade = function () {
  start.innerText = "Level " + level;
  compGame();
  userGame();
  return;
}

let gameSeq = [];
let userSeq = [];

let compGame = function () {
  console.log("compGame()");
  gameSeq = [];
  for (let i = 0; i < level; i++) {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 4);
      // console.log("Flash:", random);
      flash(random);
      gameSeq.push(opt[random].getAttribute("id"));

      if (i === level - 1) {
        setTimeout(() => {
          console.log("gameSeq:", gameSeq);
        }, 500);
      }
    }, i * 800);
  }
  return;
};



let idx = 0;
let userGame = function () {
  console.log("userGame()");
  userSeq = [];
  idx = 0;
  return;
}
opt.forEach(function (o) {
  o.addEventListener("click", () => {
    userSeq.push(o.getAttribute("id"));
    if (idx == gameSeq.length - 1) {
      console.log("userSeq:", userSeq);
      if (arraysEqual(gameSeq, userSeq)) {
        console.log("win");
        let previousScore = parseInt(score.innerText);
        score.innerText = previousScore + level;
        ++level;
        if (parseInt(highScore.innerText) <= parseInt(score.innerText)) {
          highScore.innerText = score.innerText;
        }
        idx = 0;
        setTimeout(() => {
          levelUpgrade();
        }, 1500);
        return;
      }
      else {
        console.log("lose");
        start.innerText = "You Lose!!!";
        restart.innerText = "Play Again";
        score.innerText = 0;
        // gameStart=false;
      }
    }
    ++idx;
  })
})

restart.addEventListener("click", () => {
  console.log("restrat clicked");
  if (iconSoundValue) {
    iconSound.play();
  }
  restart.innerText = "Restart";
  // gameStart=true;
  level = 1;
  idx = 0;
  score.innerText=0;
  levelUpgrade();
})

let flash = function (idx) {
  opt[idx].classList.add("flash");
  if (iconSoundValue) {
    click.play();
  }
  setTimeout(() => {
    // console.log("flash removed")
    opt[idx].classList.remove("flash")
  }, 400);
}





for (let ele of opt) {
  ele.addEventListener("click", () => {
    if (iconSoundValue) {
      click.play();
    }
    ele.classList.add("flash");
    setTimeout(() => {
      ele.classList.remove("flash")
    }, 250);
  });
}


const targetElement = document.body; // or document.querySelector('.main_body') etc.
document.body.style.backgroundImage = "url('backgroundImage.png')";

darkImg.addEventListener("click", () => {
  if (iconSoundValue) {
    iconSound.play();
  }
  if (darkImg.src.includes("moon.png") || darkImg.src.endsWith("moon.png")) {
    // Change image
    darkImg.src = "sun.png";

    // Change background
    targetElement.style.backgroundImage = "url('darkImg.png')";
    h1.style.color = "white";
    h2.style.color = "white";
  } else {
    // Revert image
    darkImg.src = "moon.png";
    // Revert background
    targetElement.style.backgroundImage = "url('backgroundImage.png')";
    h1.style.color = "white";
    h2.style.color = "white";
  }
});

musicIcon.addEventListener("click", () => {
  if (iconSoundValue) {
    iconSound.play();
  }
  if (musicIcon.getAttribute("src") == "MusicOn1.png") {
    musicIcon.setAttribute('src', "MusicOff1.png");
    bgMusic.pause();
    bgMusic.currentTime = 0;
    bgMusicValue = false;
  }
  else {
    bgMusicValue = true;
    musicIcon.setAttribute('src', "MusicOn1.png");
    bgMusic.play();
  }
})

soundIcon.addEventListener("click", () => {
  if (iconSoundValue && soundIcon.getAttribute("src") == "SoundOn1.png") {
    iconSound.play();
  }
  if (soundIcon.getAttribute("src") == "SoundOn1.png") {
    soundIcon.setAttribute('src', "SoundOff1.png");
    iconSoundValue = false;
  }
  else {
    soundIcon.setAttribute('src', "SoundOn1.png");
    iconSound.play();
    iconSoundValue = true;
  }
})

helpIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (iconSoundValue) {
    iconSound.play();
  }
  if (helpBox.style.visibility == "visible") {
    helpBox.style.visibility = "hidden";
    helpBox.style.opacity = 0;
  }
  else {
    helpBox.style.visibility = "visible";
    helpBox.style.opacity = 1;
  }
})
helpBox.addEventListener("click", (e) => {
  e.stopPropagation();
})

document.addEventListener("click", () => {
  if (bgMusicValue) {
    bgMusic.play();
  }
  if (helpBox.style.visibility == "visible") {
    helpBox.style.visibility = "hidden";
    helpBox.style.opacity = 0;
  }
  if (menuIcon.getAttribute('src') == "close.png") {
    document.querySelector('.icons').style.visibility = "hidden";
    menuIcon.setAttribute('src', 'menu.png');
    document.querySelector('.icons').style.opacity = 0;
  }
})

for (let img of document.querySelectorAll(".icons img")) {
  img.addEventListener("click", (e) => {
    e.stopPropagation();
  })
}

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (iconSoundValue) {
    iconSound.play();
  }
  if (menuIcon.getAttribute('src') == "menu.png") {
    menuIcon.setAttribute('src', 'close.png');
    document.querySelector('.icons').style.visibility = "visible";
    document.querySelector('.icons').style.opacity = 1;
  }
  else {
    document.querySelector('.icons').style.visibility = "hidden";
    menuIcon.setAttribute('src', 'menu.png');
    document.querySelector('.icons').style.opacity = 0;
  }

})
