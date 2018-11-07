var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

ctx.beginPath();      // Début du chemin
ctx.moveTo(150,250);   // Le tracé part du point 150,80
ctx.lineTo(190,350);  // Un segment est ajouté vers 300,230
ctx.lineTo(230,250);  // Un segment est ajouté vers 150,230
ctx.closePath();      // Fermeture du chemin
ctx.fillStyle = "#aa6522"; // Définition de la couleur de remplissage
ctx.fill();


ctx.beginPath();
ctx.moveTo(150,250);
ctx.quadraticCurveTo(150,100,230,250);
ctx.fillStyle = "#8a0908"; // Définition de la couleur de remplissage
ctx.fill();
