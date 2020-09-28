window.onload = function(){
const checkbox = document.getElementById('checkbox');


checkbox.addEventListener('click',checkMode);


function checkMode(){
    console.log('checking...');
    if(checkbox.checked){
        console.log('white on');
        darkModeOn();
    } else {
        console.log('white off');
        darkModeOff();
    }
}

function darkModeOn(){
    document.getElementById('container').classList.add("c-white");
}

function darkModeOff(){
    document.getElementById('container').classList.remove("c-white");
}


// Barre de controle Div de droite

    var slider = document.getElementById('slider');
    var active = document.getElementById('active');
    var line1 = document.getElementById('line1');
    var line2 = document.getElementById('line2');
    var line3 = document.getElementById('line3');
    var line4 = document.getElementById('line4');
    var line5 = document.getElementById('line5');

    line1.onclick = function(){
        slider.style.transform = 'translateX(0)';
        active.style.top ='0px';
    }
    line2.onclick = function(){
        slider.style.transform = 'translateX(-25%)';
        active.style.top ='80px';
    }
    line3.onclick = function(){
        slider.style.transform = 'translateX(-50%)';
        active.style.top ='160px';
    }
    line4.onclick = function(){
        slider.style.transform = 'translateX(-75%)';
        active.style.top ='240px';
    }


    var apropos = document.getElementById('apropos')

    apropos.onclick = function(){
        slider.style.transform = 'translateX(0)';
        active.style.top ='0px';
    }

    var Compétences = document.getElementById('Compétences')

    Compétences.onclick = function(){
        slider.style.transform = 'translateX(-25%)';
        active.style.top ='80px';
    }

    var Prestations = document.getElementById('Prestations')

    Prestations.onclick = function(){
        slider.style.transform = 'translateX(-50%)';
        active.style.top ='160px';
    }

    var Contacter = document.getElementById('Contacter')

    Contacter.onclick = function(){
        slider.style.transform = 'translateX(-75%)';
        active.style.top ='240px';
    }






}
