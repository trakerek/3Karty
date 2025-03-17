var karta1 = document.getElementById('karta1');
var karta2 = document.getElementById('karta2');
var karta3 = document.getElementById('karta3');
var gra = document.getElementsByClassName("gra");
var opis = document.getElementsByClassName("zasady");
var wynik = document.getElementById('wynik');

const buttons = [karta1,karta2,karta3];

function pokazopis(){
    if(opis[0].style.display == 'block'){
        opis[0].style.display = 'none';
    }else{
        opis[0].style.display = 'block';
    }
}

    



function start(){
    var slider = document.getElementById("slider").value;
    wynik.innerHTML = `${slider}`;
    // for(let l = 0; l < slider;l++){
    let delay = 0;
    for (let l = 0; l < slider; l++) {
        setTimeout(() => {
    let i = false;
    while(!i){
        var k1 = Math.floor(Math.random() * 3);
        var k2 = Math.floor(Math.random() * 3);
        var k3 = Math.floor(Math.random() * 3);
        if(k1 !== k2 && k1 !== k3 && k2 !== k3){
            i = true;
        }
        var col = [k1+1,k2+1,k3+1]; 
        console.log(k1,k2,k3);
    }
        
        buttons.forEach((kp,index) =>{
            // kp.style.transform = "tranlateX(0px)";
            karta1.style.order = 1;
            karta3.style.order = 2;
            karta2.style.order = 3;
            
            kp.style.backgroundImage = 'url(tlo.png)';
            kp.style.backgroundSize = 'cover';
            kp.style.backgroundPosition = 'center';
        
            
            if(kp.style.order == 1 && col[0] == 1){
                kp.style.transform = `translateX(0px)`;
            }else if(kp.style.order == 1 && col[0] == 2){
                kp.style.transform = `translateX(500px)`;
            }else if(kp.style.order == 1 && col[0] == 3){
                kp.style.transform = `translateX(1000px)`;
            }

            if(kp.style.order == 2 && col[1] == 1){
                kp.style.transform = `translateX(-500px)`;
            }else if(kp.style.order == 2 && col[1] == 2){
                kp.style.transform = `translateX(0px)`;
            }else if(kp.style.order == 2 && col[1] == 3){
                kp.style.transform = `translateX(500px)`;
            }

            if(kp.style.order == 3 && col[2] == 1){
                kp.style.transform = `translateX(-1000px)`;
            }else if(kp.style.order == 3 && col[2] == 2){
                kp.style.transform = `translateX(-500px)`;
            }else if(kp.style.order == 3 && col[2] == 3){
                kp.style.transform = `translateX(0px)`;
            }
            kp.style.transition = "transform 0.5s ease-in-out";
            kp.style.order = col[index];
        });
    }, delay);
    delay += 1000;
    }
    
            
    
    

    for(let k = 0; k < buttons.length; k++){
        buttons[k].addEventListener('click', function() {
                karta1.style.backgroundImage = '';
                karta1.style.backgroundColor = 'black';
            
                karta2.style.backgroundImage = '';
                karta2.style.backgroundColor = 'black';
            
                karta3.style.backgroundImage = '';
                karta3.style.backgroundColor = 'red';
            
            console.log(`Div numer ${k + 1} został kliknięty!`);
            if(k === 2){
                wynik.innerHTML = "Wygrales!";
            }else{
                wynik.innerHTML = "Przegrales!";
            }
            
            
            buttons.forEach((kp) => {
                kp.style.transition = "transform 3s ease-in-out";
                kp.style.transform = "translateX(0px)";
            });
            
        });
    }

}