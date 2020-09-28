window.onload = function(){ //bouton switch light / dark
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
    document.getElementById('container').classList.add("container-white"); //fond du site
    document.getElementById('navbar').classList.add("navbar-white"); // Fond navbar top

    document.getElementById('gtitre').classList.add("msg-col-white"); // couleur des Gros Titre div A propos
    document.getElementById('gtitre1').classList.add("msg-col-white"); // couleur des Gros Titre div Compétences
    document.getElementById('gtitre2').classList.add("msg-col-white"); // couleur des Gros Titre div Prestations
    document.getElementById('gtitre3').classList.add("msg-col-white"); // couleur des Gros Titre div Contacter
}

function darkModeOff(){
    document.getElementById('container').classList.remove("container-white");
    document.getElementById('navbar').classList.remove("navbar-white");

    document.getElementById('gtitre').classList.remove("msg-col-white"); 
    document.getElementById('gtitre1').classList.remove("msg-col-white");
    document.getElementById('gtitre2').classList.remove("msg-col-white");
    document.getElementById('gtitre3').classList.remove("msg-col-white");
}




// Barre de controle Div de droite

    var slider = document.getElementById('slider');
    var active = document.getElementById('active');
    var line1 = document.getElementById('line1');
    var line2 = document.getElementById('line2');
    var line3 = document.getElementById('line3');
    var line4 = document.getElementById('line4');

    line1.onclick = function(){
        slider.style.transform = 'translateY(0)';
        active.style.top ='0px';
    }
    line2.onclick = function(){
        slider.style.transform = 'translateY(-25%)';
        active.style.top ='80px';
    }
    line3.onclick = function(){
        slider.style.transform = 'translateY(-50%)';
        active.style.top ='160px';
    }
    line4.onclick = function(){
        slider.style.transform = 'translateY(-75%)';
        active.style.top ='240px';
    }


    var apropos = document.getElementById('apropos')

    apropos.onclick = function(){
        slider.style.transform = 'translateY(0)';
        active.style.top ='0px';
    }

    var Compétences = document.getElementById('Compétences')

    Compétences.onclick = function(){
        slider.style.transform = 'translateY(-25%)';
        active.style.top ='80px';
    }

    var Prestations = document.getElementById('Prestations')

    Prestations.onclick = function(){
        slider.style.transform = 'translateY(-50%)';
        active.style.top ='160px';
    }

    var Contacter = document.getElementById('Contacter')

    Contacter.onclick = function(){
        slider.style.transform = 'translateY(-75%)';
        active.style.top ='240px';
    }






}
