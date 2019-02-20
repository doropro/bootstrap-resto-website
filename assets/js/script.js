/*var maDate = new Date();
var semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
var j = semaine[maDate.getDay()-1];
var an = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
var mo = an[maDate.getMonth()+1];
var a = maDate.getFullYear()
var h = maDate.getHours();
var m = maDate.getMinutes();
var affich = "Nous sommes le" + " " +j+  +mo+ "/" +a+ " " + "et il est" + " " +h+ ":" +m;*/
var d = new Date();

  var semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

  var jour = semaine[d.getDay()-1];

  var datec = d.getDate();

  var an = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

  var mois = an[d.getMonth()];

  var annee = d.getFullYear();

  var heure = d.getHours();

  var minute = d.getMinutes();

  /*function pad2(number) {
return (number < 10 ? '0' : '') + number;
}*/
  document.getElementById("timer").innerHTML = ("Nous sommes le" + " " + jour + " " + datec + " " + mois + " " + annee + ", " + heure + "h" + minute);

  if (heure < 12) {
      document.getElementById("open").innerHTML = "Nous sommes actuellement fermés";
      }
      else if (heure > 23) {
      document.getElementById("open").innerHTML = "Nous sommes actuellement fermés";
      }
      else {
    document.getElementById("open").innerHTML = "Nous sommes actuellement ouvert";
  }




 /*document.getElementById("Timer").innerHTML  = affich

if (h < 12 || h > 23) {
  console.log(1);
}
else {
  console.log(2);
}
*/
