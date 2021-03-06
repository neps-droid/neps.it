var primaa, secc, terzz, quartt, quintaa, text, abbonamento,grafica,socialADS,contenuti,seo;

function RadioV()
{

  var prima = document.getElementsByName('domanda_uno');
  var sec = document.getElementsByName('domanda_due');
  var terz = document.getElementsByName('domanda_tre');
  var quart = document.getElementsByName('domanda_quattro');
  var quinta = document.getElementsByName('domanda_cinque');


  for(i = 0; i < prima.length; i++){
    if(prima[i].checked){
      primaa = prima[i].value;
    }}

  for(i = 0; i < sec.length; i++){
    if(sec[i].checked){
      secc = sec[i].value;
    }}

  for(i = 0; i < terz.length; i++){
    if(terz[i].checked){
      terzz = terz[i].value;
    }}

  for(i = 0; i < quart.length; i++){
    if(quart[i].checked){
      quartt = quart[i].value;
    }}

  for(i = 0; i < quinta.length; i++){
    if(quinta[i].checked){
      quintaa = quinta[i].value;
    }}
}


$("#aspetta").hide();
$("#parla").hide();
$("#transizione").hide();

$("#primadomanda").hide();
$("#secondadomanda").hide();
$("#terzadomanda").hide();
$("#quartadomanda").hide();
$("#quintadomanda").hide();
$("#sestadomanda").hide();
$("#output").hide();
$("#btn").hide();
$("#invio").hide();


$( document ).ready(function() {

    var txt = document.getElementById("txt"),
    btn = document.getElementById("btn"),
    text = "Ciao sono qui per aiutarti nella scelta del piano più adatto a te!",
    textL = text.length;
    var counter=0;
    var t=0;
    var animazione;
    typ();


    function typ() {
      if(counter == 6) RadioV();
    var count = 0;
    var interval = setInterval( function () {

        $("#parla").show();
        $("#aspetta").hide();
        $("#btn").hide();
        $("#transizione").hide();

        $("#primadomanda").hide();
        $("#secondadomanda").hide();
        $("#terzadomanda").hide();
        $("#quartadomanda").hide();
        $("#quintadomanda").hide();
        $("#sestadomanda").hide();

        txt.innerHTML = text.substr(0, count);


        if (count !== textL) {
            count++;


        } else {

            if (counter==0) {
                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#transizione").hide();
                        $("#aspetta").show();
                        $("#btn").fadeIn(1500);
                    }, 2500);

                text="Di che tipo è la tua attività?";
                textL = text.length;
                counter++;
            } else if (counter==1) {
                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#btn").show();
                        $("#transizione").hide();
                        $("#aspetta").show();

                    }, 2500);
                $("#primadomanda").fadeIn(1500);


                text="Vediamo un pò, è importante per te avere delle grafiche pubblicitarie per promuovere la tua attività?";
                textL = text.length;
                counter++;
            } else if (counter==2) {
                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#transizione").hide();
                        $("#aspetta").show();
                        $("#btn").fadeIn(1500);
                    }, 2500);
                $("#primadomanda").hide();
                $("#secondadomanda").fadeIn(1000);


                text="Per te è importante la cura dei Profili e delle Pubblicità sui Social Media?";
                textL = text.length;
                counter++;
            } else if (counter==3) {
                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#transizione").hide();
                        $("#aspetta").show();
                        $("#btn").fadeIn(1500);
                    }, 2500);
                $("#secondadomanda").hide();
                $("#terzadomanda").fadeIn(1000);


                text="Quanto frequentemente aggiungeresti contenuti al tuo sito web?";
                textL = text.length;
                counter++;
            }
            else if (counter==4) {
                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#transizione").hide();
                        $("#aspetta").show();
                        $("#btn").fadeIn(1500);
                    }, 2500);
                $("#terzadomanda").hide();
                $("#quartadomanda").fadeIn(1000);


                text="Quanto è importante il Posizionamento Google per te?";
                textL = text.length;
                counter++;
            }
            else if (counter==5) {
                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#transizione").hide();
                        $("#aspetta").show();
                        $("#btn").fadeIn(1500);
                    }, 2500);
                $("#quartadomanda").hide();
                $("#quintadomanda").fadeIn(1000);

                text="Inserisci la tua mail:.<br>";
                //text="Spero di esserti stato utile.<br>Se hai bisogno di parlare con un mio collega umano, contattalo via emial :<br>neps-company@neps.it";

                textL = text.length;
                counter++;
            }
            else if (counter==6) {

                $("#parla").hide();
                $("#transizione").show();
                setTimeout(
                    function() {
                        $("#transizione").hide();
                        $("#aspetta").show();
                        $("#btn").fadeIn(1500);
                    }, 2500);
                $("#quintadomanda").hide();
                $("#sestadomanda").fadeIn(1000);

                switch (primaa) {
                  case "prima_1":
                    abbonamento = "Basic";
                    break;
                  case "prima_2":
                    abbonamento = "eCommerce";
                    break;
                  case "prima_3":
                    abbonamento = "Premium";
                    break;
                  default: abbonamento = "Premium";
                }

                switch (secc) {
                  case "seconda_1":
                    grafica = "3";
                    break;
                  case "seconda_2":
                    grafica = "2";
                    break;
                  case "seconda_3":
                    grafica = "1";
                    break;
                  default: grafica = "2";
                }

                switch (terzz) {
                  case "terza_1":
                    socialADS = "5";
                    break;
                  case "terza_2":
                    socialADS = "3";
                    break;
                  case "terza_3":
                    socialADS = "1";
                    break;
                  default: socialADS = "3";
                }

                switch (quartt) {
                  case "quarta_1":
                    contenuti = "25";
                    break;
                  case "quarta_2":
                    contenuti = "15";
                    break;
                  case "quarta_3":
                    contenuti = "5";
                    break;
                  case "quarta_4":
                    contenuti = "0";
                    break;
                  default: contenuti = "5";
                }

                switch (quintaa) {
                  case "quinta_1":
                    seo = "1";
                    break;
                  case "quinta_2":
                    seo = "0";
                    break;
                  default: seo = "1";
                }
                if(seo == 1) text = "L'abbonamento migliore per te è : <br>" + abbonamento + "<br>" + grafica + " grafiche mensili<br>" + socialADS + " Post e Pubblicità sui social al mese<br>la creazione di " + contenuti + " contenuti testuali mensili<br> seo avanzata";
                if(seo == 0) text = "L'abbonamento migliore per te è : <br>" + abbonamento + "<br>" + grafica + " grafiche mensili<br>" + socialADS + " Post e Pubblicità sui social al mese<br>creazione di " + contenuti + " contenuti testuali mensili";
                //alert(abbonamento + grafica + socialADS + contenuti + seo);
                textL = text.length;
                counter++;
            }

        clearInterval(interval);
        }
    }, 50);
    }
btn.addEventListener("click", typ);

});

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
