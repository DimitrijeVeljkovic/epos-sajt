let imeVAL = document.getElementById("imeVal"); 
let prezimeVAL = document.getElementById("prezimeVal"); 
let emailVAL = document.getElementById("emailVal"); 
let userVAL = document.getElementById("userVal"); 
let passVAL = document.getElementById("passVal"); 
let brtelVAL = document.getElementById("brtelVal"); 
let polVAL = document.getElementById("polVal"); 

function validacija(){
    if(document.getElementById("ime").value == ""){
        imeVAL.style.display = "flex";
    }else{
        imeVAL.style.display = "none";
    }

    if(document.getElementById("prezime").value == ""){
        prezimeVAL.style.display = "flex";
    }else{
        prezimeVAL.style.display = "none";
    }

    if(document.getElementById("email").value == ""){
        emailVAL.style.display = "flex";
    }else{
        emailVAL.style.display = "none";
    }

    if(document.getElementById("user").value == ""){
        userVAL.style.display = "flex";
    }else{
        userVAL.style.display = "none";
    }

    if(document.getElementById("pass").value == ""){
        passVAL.style.display = "flex";
    }else{
        passVAL.style.display = "none";
    }

    if(document.getElementById("brtel").value == ""){
        brtelVAL.style.display = "flex";
    }else{
        brtelVAL.style.display = "none";
    }

    if(!document.getElementById("m").checked && !document.getElementById("z").checked){
        polVAL.style.display = "flex";
    }else{
        polVAL.style.display = "none";
    }

    if(document.getElementById("ime").value != "" && document.getElementById("prezime").value != "" &&
        document.getElementById("email").value != "" && document.getElementById("user").value != "" && 
        document.getElementById("pass").value != "" && document.getElementById("brtel").value != "" && 
        (document.getElementById("m").checked || document.getElementById("z").checked)){
            alert("Uspešno ste se registrovali!!!");
            resetuj();
    }
}

function resetuj(){
    imeVAL.style.display = "none"; 
    prezimeVAL.style.display = "none"; 
    emailVAL.style.display = "none"; 
    userVAL.style.display = "none"; 
    passVAL.style.display = "none"; 
    brtelVAL.style.display = "none"; 
    polVAL.style.display = "none"; 
}