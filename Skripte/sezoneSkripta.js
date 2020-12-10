let slika = document.getElementById("sezonaSlika");
let naslov = document.getElementById("sezonaNaslov");
let tekst = document.getElementById("sezonaTekst");

let slike = ["Slike/sezona1.jpg", "Slike/sezona2.jpg", "Slike/sezona3.png", "Slike/sezona4.jpg"];
let naslovi = ["Sezona 1", "Sezona 2", "Sezona 3", "Sezona 4"];
let tekstovi = ["U prvoj sezoni koja se sastoji od dva dela i prikazana je 2017. i 2018. na španskoj televiziji \
                Antena 3 misteriozni profesor čiji nam motivi u startu nisu potpuno jasni okuplja grupu iskusnih \
                ljudi na ivici zakona: pljačkaša banaka, ratnih veterana, kriminalaca, praveći idealan tim u kom \
                svako ima svoj doprinos i svako je sa razlogom izabran. Kako bi zaštitio identitet svojih izabranika \
                profesor je svakom dodelio kodno ime po svetskim metropolama: Tokio, Berlin, Moskva, Nairobi, Rio, Denver, \
                Helsinki (igra ga srpski glumac Darko Perić) i Oslo. Njihov zadatak je upad u Kraljevski štampariju novca \
                gde treba da odštampaju 2,4 milijarde evra i pobegnu. Naravno, plan nailazi na brojne komplikacije i drama \
                ili bolje reći melodrama može da počne. Taoci se ne ponašaju kako bi otmičari želeli, mnogi od samih pljačkaša \
                ne poštuju unapred dogovorena pravila, pa Denver u jednoj od odmaklih epizoda čak stupa u ljubavnu aferu \
                sa taocem. Za sve to vreme policija je već oko kovnice, a glavna inspektorka stupa u kontakt sa profesorom, \
                pa čak i u aferu sa njegovim alter egom. Pred kraj sezone ona konačno poveže da su organizator otmičara i \
                njen novi partner ista ličnost – ipak, odbija da ga prijavi. Sa tri izgubljena života i više nego dva puta \
                manje novca nego što je planirano, pljačkaši napuštaju štampariju nakon 128 sati provedenih u njoj. Inspektorka \
                pronalazi razglednice na kojima su zapisane koordinate lokacije na Filipinima gde je profesor očekuje da mu se pridruži.",

                "Druga sezona serije (delovi 3 i 4) snimljena je u produkciji Netflixa i prikazana 2019. i 2020. godine. Tri godine nakon \
                pljačke Europol je uspeo da pronađe i uhapsi Ria što je motiv za novo okupljanje tima. Profesor je na osnovu starih \
                Berlinovih planova odlučio da upadne u Banku Španije i time ucenjuje policiju kako bi oslobodila Ria. Zajedno sa Rakel, \
                inspektorkom iz prve sezone koju sada svi znaju kao Lisabon, on okuplja stare priijatelje, ali i troje novih koji dobijaju \
                imena: Marsej, Bogota i Palermo. Prerušeni pljačkašu ulaze u banku, uzimaju taoce i dokopaju se zlata i državnih tajni. \
                To je dovoljno da policija popusti i oslobodi Ria, ali policija nakon toga hapsi Lisabon nakon što je snajperom pogođena \
                Najrobi. Lisabon je u zatvoru, a pljačkaši se bore da sačuvaju Najrobi u životu. Tokio je preuzela komandu od Palerma \
                koji je sada besan i pokušava da povrati vlast tako što sarađuje sa šefom obezbenja banke Gandijom koji uspeva da pobegne \
                i stupi u komunikaciju sa policijom. Počinje igra mačke i miša kroz koju Palermo uspeva da ponovo zadobije poverenje grupe, \
                ali Gandija puca u Najrobi kojoj ovog puta nema spasa. Za to vreme profesor obelodanjuje u javnosti informacije da je Rio \
                mučen u pritvoru i da je Lisabon nezakonito držana u policiji nakon čega glavna insprektorka Sijera dobija otkaz i počinje \
                privatnu borbu protiv Profesora. Lisabon je oslobođena ali Sijera je otkrila gde se Profesor nalazi i sada ima njegov život \
                u svojim rukama. Mnogo toga je ostalo da visi u vazduhu tako da je jasno da se nova sezona uveliko priprema.",

                "Razbacani uglavnom u egzotičnim zemljama “Trećeg sveta”, naši su kradljivci morali biti suočeni s konfliktom bez kojeg nema \
                drame, bez kojeg nema ni serije. U prvim minutama Rio i Tokio kao idealni par kupio je malo tropsko ostrvo na kojem živi \
                erotično u egzotičnoj idili sve dok starijoj i nemirnoj Tokio nije dojadi pasivna rutina. Odlučivši videti šta svet nudi, \
                ona odlazi s ostrva na kojem ostaje premladi Rio i s odbeglom se dragom čuje preko iskrijumčarenog telefona (kako ih Interpol \
                ne bi locirao), ali svejedno ga nalaze i hapse španske vlasti. Ovde dolazi do zapleta: hapšenje niko ne otkriva u javnosti, \
                zbog čega Tokio odlazi pomoći Profesoru koji je u vlastitom Edenu s nekadašnjom inspektorkom Murillo (sada Lisabon). \
                Oboma je sada već jasno da momka vlasti muče u zatočeništvu ne bi li otkrio Profesorovu geo-lokaciju i jednom za svagda \
                zatvorio slučaj. Osloboditi rudlavog lopova za kojeg niko ni ne zna bilo bi nemoguće bez akcije zahtevnije od prethodne \
                pljačke i Profesor odmah odlučuje provesti stari plan prethodno ubijenog brata (kodnog imena Berlin) – ukrasti zlato Narodne \
                banke Španije. Obrazac i kostur treće sezone sledi onaj iz prve dve (vremenski razdvojene u distribuciji svega pet mjeseci): \
                u samoj strukturi serije ne dobivamo ništa novo, naviknuti na histerično lupanje srca isprovociranog frenetičnim i rafalnim \
                izmenama adrenalinskih minijatura što čine celinu. Ona istovremeno poentira kako je društveni haos arsenal vladine kontrole \
                deljenje stvarnosti u kojoj se istina preokreće zasićenjem kratkih i prodornih vesti što na kraju rezultira diskreditacijom \
                istine i neproveravanjem izvora te konačnom kontrolom javnosti kroz populističku platformu. Drugim rečima, politička je \
                dimenzija podteksta serije snažnije i preciznije usmerena na deformacije tehnokratskih društava savremene Europe.",

                "Radnja četvrte sezone započinje tamo gde je stala treća. Najrobi se bori za svoj život, Lisbon je u policijskom pritvoru \
                a Profesor u bekstvu. Priča donosi i jedno veliko iznenađenje, potpuno neočekivano. Povratak Berlina, koji je umro u drugoj \
                sezoni.Prva epizoda se zove “Igra je završena”. U njoj El Profesor plače – verovatno zbog smrti svog voljenog Rakela u \
                finalu sezone 3. Epizoda 2 prikazuje nam flešbek Berlinovom venčau, a epizoda 3 donosi sukob sa Denverom i nekim \
                misterioznim naslovom “Lekcija iz anatomije”. U međuvremenu, Epizoda 4 se bavi Profesorom pod naslovom “Pasadoble”, \
                sledeća epizoda, “5 minuta ranije” prikazuje eksploziju, a 6 prikazuje Profesora koji trenira boks. Epizoda 7 se zove \
                “Strike the tentr”."];
i = 0;      
var duzina = slike.length;

function prikaziSadrzaj(broj){
    slika.src = slike[broj];
    naslov.innerHTML = naslovi[broj];
    tekst.innerHTML = tekstovi[broj];
}

function promeniDesno(){
    i++;
    if (i == duzina) {
        i = 0;
    }
    prikaziSadrzaj(i);
}

function promeniLevo(){
    i--;
    if(i == -1){
        i = duzina - 1;
    }
    prikaziSadrzaj(i);
}