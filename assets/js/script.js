//date +hours

(function() {
var d = new Date();
var semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
var jour = semaine[d.getDay()-1];
var date = d.getDate();
var an = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
var mois = an[d.getMonth()];
var annee = d.getFullYear();
var heure = d.getHours();
var minute = d.getMinutes();

  function pad2(minute) { // 0 before minutes
return (minute < 10 ? '0' : '') + minute;
}
  document.getElementById("timer").innerHTML = ("Nous sommes le" + " " + jour + " " + date + " " + mois + " " + annee + ", " + heure + "h" + pad2(minute));

  if (heure < 12) {
      document.getElementById("open").innerHTML = "Nous sommes actuellement fermés";
      }
      else if (heure > 23) {
      document.getElementById("open").innerHTML = "Nous sommes actuellement fermés";
      }
      else {
    document.getElementById("open").innerHTML = "Nous sommes actuellement ouvert";
  }
})();
