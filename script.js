var karta1 = document.getElementById("karta1");
var karta2 = document.getElementById("karta2");
var karta3 = document.getElementById("karta3");
var gra = document.getElementsByClassName("gra");
var opis = document.getElementsByClassName("zasady");
var wynik = document.getElementById("wynik");
var ile = document.getElementsByClassName("ile");
var strike = document.getElementsByClassName("strike")[0];
var poziom = document.getElementById("poziom");
var count = 0;
var czy = false;
var mot1 = document.getElementsByClassName("czerwony")[0];
var mot2 = document.getElementsByClassName("krol")[0];
var mot3 = document.getElementsByClassName("mot")[0];
const board = document.querySelector('.gra');
function blockClicks() {
  board.classList.add('disabled');
  czy = false;
}

function allowClicks() {
  board.classList.remove('disabled');
  czy = true;
}

const motywydiv = [mot1, mot2, mot3];
const motywy = ["url(czarna.png)", "url(czerwona.png)", "none"];

let kolorcz = motywy[2];
let kolorbl = motywy[2];

for (let k = 0; k < motywydiv.length; k++) {
  motywydiv[k].addEventListener("click", function () {
    if (k == 0) {
      kolorcz = motywy[2];
      kolorbl = motywy[2];
      ustawkolor(kolorbl, kolorcz);
    }
    if (k == 1) {
      kolorcz = motywy[1];
      kolorbl = motywy[0];
      ustawkolor(kolorbl, kolorcz);
    }
  });
}

function ustawkolor(kolorbl, kolorcz) {
  karta1.style.backgroundImage = kolorbl;
  karta2.style.backgroundImage = kolorbl;
  karta3.style.backgroundImage = kolorcz;
}
ustawkolor();
const buttons = [karta1, karta2, karta3];

var krolcz = document.getElementsByClassName("krolcz")[0];
var krolbl = document.getElementsByClassName("krolbl")[0];

krolcz.style.backgroundImage = "url(czerwona.png)";
krolcz.style.borderRadius = "0px";
krolcz.style.backgroundSize = "cover";
krolcz.style.backgroundPosition = "center";

krolbl.style.backgroundImage = "url(czarna.png)";
krolbl.style.borderRadius = "0px";
krolbl.style.backgroundSize = "cover";
krolbl.style.backgroundPosition = "center";

buttons.forEach((kp) => {
  kp.style.borderRadius = "0px";
  kp.style.backgroundSize = "cover";
  kp.style.backgroundPosition = "center";
});
function pokazopis() {
  if (opis[0].style.display == "block") {
    opis[0].style.display = "none";
  } else {
    opis[0].style.display = "block";
  }
}

function tas() {
  var slider = document.getElementById("slider").value;
  document.getElementsByClassName("tas")[0].innerHTML = slider;
  poziomtrudnosci();
}
function szybkosc() {
  var slider2 = document.getElementById("slider2").value;
  document.getElementsByClassName("szyb")[0].innerHTML = slider2;
  poziomtrudnosci();
}

function poziomtrudnosci() {
  var proc = ((parseInt(slider.value) - 1) / 19) * 100;
  var proc2 = (1 - parseFloat(slider2.value) / 1.1) * 100;
  poziom.innerHTML = `${parseInt((proc + proc2) / 2)}%`;
}

function animacja(kp) {
  kp.classList.add("shrink-animation");
  setTimeout(() => {
    kp.style.backgroundImage = "url(tyl.png)";
    kp.style.borderRadius = "0px";
    kp.style.backgroundSize = "cover";
    kp.style.backgroundPosition = "center";
  }, 500);
  setTimeout(() => {
    kp.classList.remove("shrink-animation");
    kp.classList.add("expand-animation");
  }, 500);
  setTimeout(() => {
    kp.classList.remove("expand-animation");
  }, 1000);
}

function animacja2(kp) {
  kp.classList.add("shrink-animation");
  setTimeout(() => {
    ustawkolor(kolorbl, kolorcz);
    kp.style.borderRadius = "0px";
    kp.style.backgroundSize = "cover";
    kp.style.backgroundPosition = "center";
  }, 500);
  setTimeout(() => {
    kp.classList.remove("shrink-animation");
  }, 500);

  setTimeout(() => {}, 1000);
}

var czy = false;
function start() {
  blockClicks();
  var slider = parseInt(document.getElementById("slider").value, 10);
  var speed  = parseFloat(document.getElementById("slider2").value);
  let delay = 0;
  buttons.forEach((kp) => {
    animacja(kp);
  });

  for (let l = 0; l < slider; l++) {
    setTimeout(() => {
      let i = false;
      while (!i) {
        var k1 = Math.floor(Math.random() * 3);
        var k2 = Math.floor(Math.random() * 3);
        var k3 = Math.floor(Math.random() * 3);
        if (k1 !== k2 && k1 !== k3 && k2 !== k3) {
          i = true;
        }
        var col = [k1 + 1, k2 + 1, k3 + 1];
      }

      buttons.forEach((kp, index) => {
        karta1.style.order = 1;
        karta3.style.order = 2;
        karta2.style.order = 3;

        if (kp.style.order == 1 && col[0] == 1) {
          setTimeout(() => {
            kp.style.transform = `translateX(0%)`;
          }, 2000);
        } else if (kp.style.order == 1 && col[0] == 2) {
          setTimeout(() => {
            kp.style.transform = `translateX(200%)`;
          }, 2000);
        } else if (kp.style.order == 1 && col[0] == 3) {
          setTimeout(() => {
            kp.style.transform = `translateX(400%)`;
          }, 2000);
        }

        if (kp.style.order == 2 && col[1] == 1) {
          setTimeout(() => {
            kp.style.transform = `translateX(-200%)`;
          }, 2000);
        } else if (kp.style.order == 2 && col[1] == 2) {
          setTimeout(() => {
            kp.style.transform = `translateX(0%)`;
          }, 2000);
        } else if (kp.style.order == 2 && col[1] == 3) {
          setTimeout(() => {
            kp.style.transform = `translateX(200%)`;
          }, 2000);
        }

        if (kp.style.order == 3 && col[2] == 1) {
          setTimeout(() => {
            kp.style.transform = `translateX(-400%)`;
          }, 2000);
        } else if (kp.style.order == 3 && col[2] == 2) {
          setTimeout(() => {
            kp.style.transform = `translateX(-200%)`;
          }, 2000);
        } else if (kp.style.order == 3 && col[2] == 3) {
          setTimeout(() => {
            kp.style.transform = `translateX(0%)`;
          }, 2000);
        }

        var szybkosc = document.getElementsByClassName("szyb")[0];
        kp.style.transition =
          "transform " + szybkosc.innerHTML + "s ease-in-out";
        kp.style.order = col[index];
        setTimeout(() => {
          ile[0].innerHTML = `${l + 1}`;
        }, 2000);
      });
    }, delay);
    delay += 1000;
  }
  const unlockAfter = ((slider - 1) * 1000) + 2000 + (speed * 1000) + 150; // mały bufor
  setTimeout(allowClicks, unlockAfter);
}

buttons.forEach((kp, idx) => {
  kp.addEventListener("click", () => {
    if (!czy) return; 
    blockClicks(); 

    animacja2(kp);

    if (idx === 2) {
      wynik.innerHTML = "Wygrales!";
      count++;
    } else {
      wynik.innerHTML = "Przegrales!";
      count = 0;
    }
    strike.innerHTML = count;

    setTimeout(() => {
      buttons.forEach((btn) => {
        btn.style.transition = "transform 2s ease-in-out";
        btn.style.transform = "translateX(0px)";
      });
    }, 2000);
  });
});

