function laheta(){
    var nimi = document.getElementById("nimi").value;
    var sposti = document.getElementById("sposti").value;
    var puh = document.getElementById("puh").value;

    document.getElementById("vastaus").innerHTML= "Kiitos viestistä, " + nimi + " Sähköpostisi " + sposti + " Puhelinnumerosi " + puh;
}