


function reset(){

    var nom = "";
    var mail = "";
    var msg = "";

    


}

//SECTION DU PROFIL OU CHOIX "THIBAULT" ou "DEV"

function GameurImg(){

    document.images["photo"].src = "public/img/logodiscord.png";
}

function tgameur(){

    
    var n3 = "<h3>Thibault</h3>";
        
    var d3 = '<p><span class="sTitre">Passionné :</span><br>'
            +'Je suis un passionné de programmation, le fait de créer sois même quelque chose de A à Z, de voir l\'avancée de son projet en temps réel, de se confronter à des erreurs et de les résoudres pour que ça refonctionne, re-travailler son projet pour le poffiner, l\'améliorer, le modifier pour qu\'à la fin il te convienne et soit utilisable sans aucun soucis. <br>Voilà pourquoi je suis passioné par la programmation.'
            +'<p><span class="sTitre">Créatif :</span><br>'
            +"À l'école pendant mon temps libre j'aimais passer du temps à dessinner dans mon cahier de brouillon, des personnages, des formes 3D et leurs perspectives et bien d'autres. <br>"
            +"Aujourd'hui ça n'est plus sur mon cahier de brouillon que je dessine, mais sur tablette graphique via Adobe Photoshop ou Adobe Illustrator dans la création d'images ou logos en tout genre.</p>";

        
        
    document.querySelector(".ttitre").innerHTML = n3;
    document.querySelector(".tdescri").innerHTML = d3;
}

function DevImg(){

    document.images["photo"].src = "public/img/Thibault.png";    
}

function tDev(){

    var nD = "<h3>Le Dev</h3>";
        
    var dD = '<p>J\'ai commencé le développement assez jeune, en commençant par de petits programmes .bat pour impressionner les copains à l\'école, puis par du simple <span class="langage">HTML</span>/<span class="langage">CSS</span> pour me faire ma propre page d\'accueil.</p>'
            +'<p>Aujourd\'hui je pousse la chose un peu plus loin en m\'essayant à divers langages en simultané, <span class="langage">HTML</span>/<span class="langage">CSS</span>/<span class="langage">PHP</span>/<span class="langage">Java</span> ainsi que du <span class="langage">node.js</span> notamment pour la création de bots Discord.</p>'
            +'<p>Actuellement etudiant et souhaitant un jour devenir Webmaster, suis à la recherche d\'une entreprise pouvant m\'accueillir pour de l\'alternance</p>';

        
        
    document.querySelector(".ttitre").innerHTML = nD;
    document.querySelector(".tdescri").innerHTML = dD;
}



//CHOIX DES EXPERIENCES

function text1(){

    var n = "<h1>DraftBot</h1>";

    var d = "<p>DraftBot est un bot qui a été créé en node.js sur la plateforme Discord</p>"
            +"<p>Il dispose de toutes les fonctionnalités nécessaires à la conception d'un serveur Discord complet ainsi qu'à sa gestion."
            +"<p>Effectivement DraftBot permet la création de catégories, de canaux, de rôles mais aussi la création de message textuel simple ou sous forme d'embed de façons automatique que l'on peut modifier à tout moment et de façon assez rapide via le pannel web mis à disposition </p>";


    document.getElementById("nom").innerHTML = n;
    document.getElementById("descri").innerHTML = d;
}


function text2(){

    var n2 = "<h1>Titre 2</h1>";
    
    var d2 = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
    
    
    document.getElementById("nom").innerHTML = n2;
    document.getElementById("descri").innerHTML = d2;
}


function text3(){

    var n3 = "<h1>Titre 3</h1>";
        
     var d3 = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
     
        
        
    document.getElementById("nom").innerHTML = n3;
    document.getElementById("descri").innerHTML = d3;
}