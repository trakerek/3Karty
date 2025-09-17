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
var czy2 = true;
var mot1 = document.getElementsByClassName("czerwony")[0];
var mot2 = document.getElementsByClassName("krol")[0];
var mot3 = document.getElementsByClassName("mot")[0];
const board = document.querySelector(".gra");
var krolcz = document.getElementsByClassName("krolcz")[0];
var krolbl = document.getElementsByClassName("krolbl")[0];
var motyw3a = document.getElementsByClassName("mot1")[0];
var motyw3b = document.getElementsByClassName("mot2")[0];
var cz = document.getElementsByClassName("cz")[0];
var bl = document.getElementsByClassName("bl")[0];


poziomtrudnosci();

/**
 * Blokuje kliknięcia na planszy
 *
 * @return {void}
 */
function blockClicks() {
  board.classList.add("disabled");
  mot1.classList.add("disabled");
  mot2.classList.add("disabled");
  mot3.classList.add("disabled");
  czy = false;
  czy2 = false;
}

/**
 * Odblokuj kliknięcia na planszy
 *
 * @return {void}
 */
function allowClicks() {
  board.classList.remove("disabled");
  czy = true;
}

//motywy
const motywydiv = [mot1, mot2, mot3];
const motywy = [
  "url(czarna.png)",
  "url(czerwona.png)",
  "none",
  "url(tyl2.png)",
  "url(tyl.png)",
];

//domyslny na nic
let kolorcz = motywy[2];
let kolorbl = motywy[2];

//ustawienie motywu
for (let k = 0; k < motywydiv.length; k++) {
  motywydiv[k].addEventListener("click", function () {
    if(czy2 == true){
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
      if (k == 2) {
        kolorcz = motywy[3];
        kolorbl = motywy[4];
        ustawkolor(kolorbl, kolorcz);
      }
    }
  });
}

/**
 * Ustawia kolor karty
 *
 * @param {string} kolorbl - kolor karty 1 i 2
 * @param {string} kolorcz - kolor karty 3
 * @return {void}
 */

function ustawkolor(kolorbl, kolorcz) {
  karta1.style.backgroundImage = kolorbl;
  karta2.style.backgroundImage = kolorbl;
  karta3.style.backgroundImage = kolorcz;
}

ustawkolor();
const buttons = [karta1, karta2, karta3];



motyw3a.style.backgroundImage = "url(tyl2.png)";
motyw3a.style.borderRadius = "0px";
motyw3a.style.backgroundSize = "cover";
motyw3a.style.backgroundPosition = "center";

motyw3b.style.backgroundImage = "url(tyl.png)";
motyw3b.style.borderRadius = "0px";
motyw3b.style.backgroundSize = "cover";
motyw3b.style.backgroundPosition = "center";

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

/**
 * Pokaz/ukryj opis
 * Zmienia stan elementu z klasa "zasady" na przeciwny
 * @return {void}
 */
function pokazopis() {
  if (opis[0].style.display == "block") {
    opis[0].style.display = "none";
  } else {
    opis[0].style.display = "block";
  }
}

/**
 * Ustawia ilość tasowań i wywołuje poziomtrudnosci()
 * @return {void}
 */
function tas() {
  var slider = document.getElementById("slider").value;
  document.getElementsByClassName("tas")[0].innerHTML = slider;
  poziomtrudnosci();
}
/**
 * Ustawia szybkość i wywołuje poziomtrudnosci()
 * @return {void}
 */
function szybkosc() {
  var slider2 = document.getElementById("slider2").value;
  document.getElementsByClassName("szyb")[0].innerHTML = slider2;
  poziomtrudnosci();
}

/**
 * Oblicza poziom trudnosci (w %) na podstawie dwóch suwaków
 * @param {number} proc - suwak 1 (ilość tasowań - 1) / 19 * 100
 * @param {number} proc2 - 1 - suwak 2 / 1.1 * 100
 * @return {string} - wartość poziomu trudnosci w %
 */
function poziomtrudnosci() {
  var proc = ((parseInt(slider.value) - 1) / 19) * 100;
  var proc2 = (1 - parseFloat(slider2.value) / 1.1) * 100;
  poziom.innerHTML = `${parseInt((proc + proc2) / 2)}%`;
}

/**
 * Animacja - pokazanie/ukryj karty
 * Zmienia karty w animacji "shrink" i "expand"
 * @param {HTMLElement} kp - karta do animacji
 * @return {void}
 */
function animacja(kp) {
  kp.classList.add("shrink-animation");
  setTimeout(() => {
    kp.style.backgroundImage = "url(tyl3.png)";
    kp.style.borderRadius = "0px";
    kp.style.backgroundSize = "cover";
    kp.style.backgroundPosition = "center";
  }, 500);
  setTimeout(() => {
    kp.classList.remove("expand-animation", "shrink-animation");
    void kp.offsetWidth;
    kp.classList.add("expand-animation");
  }, 500);
  setTimeout(() => {
    kp.classList.remove("expand-animation");
  }, 1000);
}

/**
 * Animacja - pokazanie/ukryj karty
 * Zmienia karty w animacji "shrink" i "expand"
 * @param {HTMLElement} kp - karta do animacji
 * @return {void}
 */
function animacja2(kp) {
  // pobierz aktualne przesunięcie translateX (np. z inline style)
  const style = window.getComputedStyle(kp);
  const matrix = new WebKitCSSMatrix(style.transform);
  const translateX = matrix.m41;
    // ustaw zmienną CSS --tx w px
  kp.style.setProperty('--tx', `${translateX}px`);
  kp.classList.add("shrink-animation2");
  setTimeout(() => {
    const revealImage = (kp === karta3) ? kolorcz : kolorbl;
    kp.style.backgroundImage = revealImage;
    kp.style.borderRadius = "0px";
    kp.style.backgroundSize = "cover";
    kp.style.backgroundPosition = "center";
  }, 500);
  setTimeout(() => {
    kp.classList.remove("expand-animation2", "shrink-animation2");
    void kp.offsetWidth;
    kp.classList.add("expand-animation2");
  }, 500);
  setTimeout(() => {
    kp.classList.remove("expand-animation2");
  }, 1000);
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, idx) => val === b[idx]);
}

var czy = false;
/**
 * Start game with given number of permutations and speed
 * @description
 * This function starts the game by calling blockClicks() and then
 * animates the cards with given speed and number of permutations.
 * After the animations are done, it calls allowClicks() after a short
 * delay to ensure that the cards are clickable again.
 * @param {number} slider - number of permutations
 * @param {number} speed - speed of the animations
 */
function start() {
  if(czy2 == false){return 0}
  blockClicks();
  var slider = parseInt(document.getElementById("slider").value, 10);
  var speed = parseFloat(document.getElementById("slider2").value);
  let delay = 0;
  buttons.forEach((kp) => {
    animacja(kp);
  });

  for (let l = 0; l < slider; l++) {
    setTimeout(() => {
      let i = false;
      var tab = [0, 1, 2];
      while (!i) {
        var k1 = Math.floor(Math.random() * 3);
        var k2 = Math.floor(Math.random() * 3);
        var k3 = Math.floor(Math.random() * 3);
        let tab2 = [k1, k2, k3];
        if (k1 !== k2 && k1 !== k3 && k2 !== k3 && !arraysEqual(tab, tab2)) {
          i = true;
          tab = [k1, k2, k3];
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
            kp.style.transform = `translateX(165%)`;
          }, 2000);
        } else if (kp.style.order == 1 && col[0] == 3) {
          setTimeout(() => {
            kp.style.transform = `translateX(330%)`;
          }, 2000);
        }

        if (kp.style.order == 2 && col[1] == 1) {
          setTimeout(() => {
            kp.style.transform = `translateX(-165%)`;
          }, 2000);
        } else if (kp.style.order == 2 && col[1] == 2) {
          setTimeout(() => {
            kp.style.transform = `translateX(0%)`;
          }, 2000);
        } else if (kp.style.order == 2 && col[1] == 3) {
          setTimeout(() => {
            kp.style.transform = `translateX(165%)`;
          }, 2000);
        }

        if (kp.style.order == 3 && col[2] == 1) {
          setTimeout(() => {
            kp.style.transform = `translateX(-330%)`;
          }, 2000);
        } else if (kp.style.order == 3 && col[2] == 2) {
          setTimeout(() => {
            kp.style.transform = `translateX(-165%)`;
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
  const unlockAfter = (slider - 1) * 1000 + 2000 + speed * 1000 + 150; // mały bufor
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
    setTimeout(()=>{
      buttons.forEach((btn) => {
        if(btn != kp){
          animacja2(btn);
        }
        setTimeout(()=>{  
          btn.style.transition = "transform 2s ease-in-out";
          btn.style.transform = "translateX(0px)";
        },2000);
      })  
    },2000);
    setTimeout(() =>{
    czy2 = true;
    },8000)
  });
});
