
let slikeProfesor = ["Slike/profesor1.jpg", "Slike/profesor2.jpeg", "Slike/profesor3.jpg","Slike/profesor4.jpg"];
let slikeBerlin = ["Slike/berlin1.jpg","Slike/berlin2.jpg","Slike/berlin3.jpg"];
let slikeNairobi = ["Slike/nairobi1.jpg","Slike/nairobi2.jpg","Slike/nairobi3.jpg","Slike/nairobi4.jpg"];
let slikeTokio = ["Slike/tokio1.jpg","Slike/tokio2.jpg","Slike/tokio3.jpg","Slike/tokio4.jpg"];
let slikeDenver = ["Slike/denver1.jpg","Slike/denver2.jpg","Slike/denver3.jpg","Slike/denver4.jpg"];
let slikeRakel = ["Slike/rakel1.jpg","Slike/rakel2.jpg","Slike/rakel3.jpg"];

function menjaj(niz){
    i = 0;
    setInterval(() => {
        i++;
        if (i == niz.length) {
            i = 0;
        }
        document.getElementById("slika").src = niz[i];
    }, 3000);
}

