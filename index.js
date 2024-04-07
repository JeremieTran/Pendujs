const form = document.getElementById("form1");
const form2 = document.getElementById("form2");
const supprimer = document.getElementById("Motracine");
const deviner = document.getElementById("Proposition");
const lettre = document.getElementById("lettre");
let erreur = true;
let erreurCompteur = 0;
let grid = [];
let emptyGrid = [];
let gridHtml = [];

form.addEventListener('submit', (e) => {
e.preventDefault()
let motRacine = e.target.Motracinein.value;
grid = motRacine.split('');
supprimer.remove();
let suppid = 0;

    if (grid != null)
    //console.log(grid.length)
    deviner.style.display = "block";
    form2.addEventListener('submit', (e) => {
    e.preventDefault()
    let propositionLetter = e.target.Propositionletter.value;
    gridHtml.length = grid.length;
    erreur = true;


        grid.forEach (function(e) {
            if (propositionLetter === e){
            erreur = false;
            suppid = grid.indexOf(e);
            gridHtml.splice ([suppid],1,propositionLetter);
            delete grid [suppid];
            document.getElementById("longueurmot").innerHTML = `Le mot comporte ${grid.length} lettres`;
            document.getElementById("lettre").innerHTML = gridHtml.join(' - ');
            console.log (1,grid)
            console.log (2,gridHtml)
            console.log (3,grid.length)
                if (grid.length == 0){
                    console.log (grid.length)
                    
                    alert ("Tu as gagné , t'es pas si mauvais en fait !")
                    location.reload();
                }
            //console.log(grid)
            //console.log(suppid)
            //console.log(gridHtml)
            }

            else {}
        });

        if (erreur === true){
            erreurCompteur += 1;
             if (erreurCompteur === 1){
                document.getElementById("evolution1").style.display = "block";
                document.getElementById("attention").innerHTML = "Bon, ça commence mal";
             }
             if (erreurCompteur === 2){
                document.getElementById("evolution1").remove();
                document.getElementById("evolution2").style.display = "block";
                document.getElementById("attention").innerHTML = "Et crotte ...";
             }
             if (erreurCompteur === 3){
                document.getElementById("evolution2").remove();
                document.getElementById("evolution3").style.display = "block";
                document.getElementById("attention").innerHTML = "Bah, tu fais exprès ?";
             }
             if (erreurCompteur === 4){
                document.getElementById("evolution3").remove();
                document.getElementById("evolution4").style.display = "block";
                document.getElementById("attention").innerHTML = "T'es mauvais quand même";
             }
             if (erreurCompteur === 5){
                document.getElementById("evolution4").remove();
                document.getElementById("evolution5").style.display = "block";
                document.getElementById("attention").innerHTML = "Oulahh, plus que trois chances...";
             }
             if (erreurCompteur === 6){
                document.getElementById("evolution5").remove();
                document.getElementById("evolution6").style.display = "block";
                document.getElementById("attention").innerHTML = "Fais gaffes, t'as déjà la corde au cou";
             
             }
             if (erreurCompteur === 7){
                document.getElementById("evolution6").remove();
                document.getElementById("evolution7").style.display = "block";
                document.getElementById("attention").innerHTML = "Bon bah t'es dans la merde ...";
             
             }
             if (erreurCompteur === 8){
                document.getElementById("evolution7").remove();
                document.getElementById("evolution8").style.display = "block";
                document.getElementById("attention").innerHTML = "T'ES MORT MAN !!!";
                alert ("T'es mauvais quand même ...")
                location.reload();
             }

            console.log (erreurCompteur)

        }
            

        






    });
});
