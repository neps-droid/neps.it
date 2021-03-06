<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="theme-color" content="#00001a" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Neps</title>
    <link rel="icon" href="assets/img/nepslogo.png" type="image/icon type">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/Pricing-Table-with-Icon-Buy-Button-1.css">
    <link rel="stylesheet" href="assets/css/untitled.css">
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">

    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <style>
      @font-face { font-family: JuneBug; src: url('font/TESLA.ttf'); }
      @font-face { font-family: JuneBug2; src: url('font/rc.ttf'); }
      @font-face { font-family: JuneBug3; src: url('font/app.ttf'); }
      #tesla {font-family: JuneBug;}
      #tt{font-family: JuneBug2;}
      #sku{font-family: JuneBug3;}
    </style>
</head>
<body id="page-top">
  <script>
  mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
  </script>

    <script> AOS.init();</script>
    <nav  class="navbar navbar-light navbar-expand-md navbar navbar-expand-lg fixed-top" id="mainNav" style="opacity: 1;">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="index.html" style="color: rgb(101,101,101);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</a><button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarResponsive"
                type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item nav-link js-scroll-trigger" role="presentation"><a class="nav-link js-scroll-trigger cool-link" style="color: #a3a3a3;"> <span id="tt" style="color:grey;font-weight : bold;">prenotazone</span></a></li>
                </ul>
            </div>
        </div>
    </nav>


    <script src="script.js"></script>
    <section id ="contatti" class="content-section carta text-center"  style="background-color: black;padding:30px;">
      <br><br><br><br>
      <h2 id="tt" style="color:white;font-weight:bold;">Inserisci i tuoi dati</h2>

      <hr style="width:6em;" class="sep3"/>

      <p style="color:#a3a3a3;">Inserendo i tuoi dati ci permetterai di contattarti, nel minor tempo possibile, per l'abbonamento da te selezionato. </p><br>
      <h2 id="tt" style="color:white;font-weight:bold;font-weight:bold;">Email personale</h2>

      <form action="takedatacontact.php" method="post" class="form">
    		<input type="text" name="email" placeholder="Email"><br>

      <p style="color:#a3a3a3;">Oppure</p><br>

      <h2 id="tt" style="color:white;font-weight:bold;font-weight:bold;">Telefono</h2>

      <hr style="width:6em;" class="sep3"/>

    		<input type="text" name="telefono" placeholder="Telefono">
    	</form><br><br>

      <div onclick="takedatacontact.php" class="buttonn buttonn-3" id="btn">
        <div id="circle"></div>
        <a id="tt" style="font-weight:bold;font-size:15px;">Avanti</a>
      </div>


      <footer style="background-color: black;">
          <div class="container text-center" style="color: white;">
              <p>Copyright 2019 © Neps Company</p>
          </div>
      </footer>
      <style>


        form {
       	 padding: 20px 0;
       	 position: relative;
       	 z-index: 2;
       }
        form input {
       	 display: block;
       	 appearance: none;
       	 outline: 0;
       	 border: 1px solid rgba(255,255,255,0.4);
       	 background-color: rgba(255,255,255,0.2);
       	 width: 250px;
       	 border-radius: 3px;
       	 padding: 10px 15px;
       	 margin: 0 auto 10px auto;
       	 text-align: center;
       	 font-size: 18px;
       	 color: white;
       	 transition-duration: 0.25s;
       	 font-weight: 300;
       }
        form input:hover {
       	 background-color: rgba(255,255,255,0.4);
       }
        form input:focus {
       	 background-color: white;
       	 width: 300px;
       	 color: black;
       }
        form button {
       	 appearance: none;
       	 outline: 0;
       	 background-color: white;
       	 border: 0;
       	 padding: 10px 15px;
       	 color: #53e3a6;
       	 border-radius: 3px;
       	 width: 250px;
       	 cursor: pointer;
       	 font-size: 18px;
       	 transition-duration: 0.25s;
       }
        form button:hover {
       	 background-color: #f5f7f9;
       }

       /* BOTTONE */

       .buttonn {
             display: inline-flex;
             height: 40px;
             width: 150px;
             border: 2px solid #BFC0C0;
             margin: 20px 20px 20px 20px;
             color: #BFC0C0;
             text-transform: uppercase;
             text-decoration: none;
             font-size: .8em;
             letter-spacing: 1.5px;
             align-items: center;
             justify-content: center;
             overflow: hidden;
           }

           a {
             color: #BFC0C0;
             text-decoration: none;
             letter-spacing: 1px;
           }

           .buttonn-3 {
             position: relative;
             overflow: hidden;
             cursor: pointer;
           }

           .buttonn-3 a {
             position: relative;
             transition: all .45s ease-Out;
           }

           #circle {
             width: 0%;
             height: 0%;
             opacity: 0;
             line-height: 40px;
             border-radius: 50%;
             background: #BFC0C0;
             position: absolute;
             transition: all .5s ease-Out;
             top: 20px;
             left: 70px;
           }

           .buttonn-3:hover #circle {
             width: 200%;
             height: 500%;
             opacity: 1;
             top: -70px;
             left: -70px;
           }

           .buttonn-3:hover a {
             color: #2D3142;
           }
      </style>
  </section>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/grayscale.js"></script></body>

</html>
