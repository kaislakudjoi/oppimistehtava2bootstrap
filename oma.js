function laheta(){
    var nimi = document.getElementById("nimi").value;
    var sposti = document.getElementById("sposti").value;
    var puh = document.getElementById("puh").value;
    var palaute = document.getElementById("palaute").value;
    var parasta = document.querySelector('input[name="parasta"]:checked') ? document.querySelector('input[name="parasta"]:checked').value : '';
    var toiveet = [];
    var toiveetCheckboxes = document.querySelectorAll('input[name="lisaa"]:checked');
    toiveetCheckboxes.forEach(function(checkbox) {
        toiveet.push(checkbox.value);
    });
    var loytyiko = document.getElementById("löytyikö").value;

    var vastausHTML = `
    <div class="vastaus-otsikko">Kiitos varauksestasi ${nimi} !</div>
    <div class="vastaus-rivi"><span class="vastaus-teksti">Antamasi sähköposti:</span> ${sposti}, puhelin: ${puh}</div>
    <div class="vastaus-rivi"><span class="vastaus-teksti">Palaute:</span> ${palaute}</div>
    <div class="vastaus-rivi"><span class="vastaus-teksti">Parasta kahvilassamme on:</span> ${parasta}</div>
    <div class="vastaus-rivi"><span class="vastaus-teksti">Toiveesi:</span> ${toiveet.join(', ') || 'Ei toiveita'}</div>
    <div class="vastaus-rivi"><span class="vastaus-teksti">Löysitkö etsimäsi nettisivuilta?</span> ${loytyiko}</div>
    `;

    document.getElementById("vastaus").innerHTML = vastausHTML;
}