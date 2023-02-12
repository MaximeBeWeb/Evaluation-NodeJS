// On déclare une constante qui contiendra l'export du module express
const express = require("express");
// On déclare une constante qui lance une fonction express() qui crée une application express
const app = express();
// On déclare une constante qui contiendra l'export du module body-parser
const bodyParser = require("body-parser");
// Je vais dire à Express d'utiliser bodyParser pour lire le contenu du body en json
app.use(bodyParser.json());
//on declare la constante pour l'export du module fs
const fs = require('fs');



app.get("/", (requete, response) => {
  // On utilise la response du middleware d'Express pour envoyez sur le port quand cette route est trigger la chaine caractères
  response.send("Salut!");
});


//TABLEAU APERITIFS
//on stocke dans une constante le chemin du fichier où est défini la route par laquelle sera envoyée la data
const aperitifsRoute = require("./src/routes/aperitifs_route");
app.use(aperitifsRoute);

//TABLEAU COCKTAILS
// on stocke dans une constante le chemin du fichier où est défini la route par laquelle sera envoyée la data
const cocktailsRoute = require("./src/routes/cocktails_route");
app.use(cocktailsRoute);

//TABLEAU WHISKIES
// on stocke dans une constante le chemin du fichier où est défini la route par laquelle sera envoyée la data
const whiskiesRoute = require("./src/routes/whiskies_route");
app.use(whiskiesRoute);

//TABLEAU BIERES
// on stocke dans une constante le chemin du fichier où est défini la route par laquelle sera envoyée la data
const bieresRoute = require("./src/routes/bieres_route");
app.use(bieresRoute);

//TABLEAU VINS
// on stocke dans une constante le chemin du fichier où est défini la route par laquelle sera envoyée la data
const vinsRoute = require("./src/routes/vins_route");
app.use(vinsRoute);


//TABLEAU SHOTS
// on stocke dans une constante le chemin du fichier où est défini la route par laquelle sera envoyée la data
const shotsRoute = require("./src/routes/shots_route");
app.use(shotsRoute);



// On export la constante app pour la rendre utilisable dans d'autres parties du code
module.exports = app;



