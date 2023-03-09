var dod1;
var dod2;

var odj1;
var odj2;

var mnoz1;
var mnoz2;

var dziel1;
var dziel2;

var wynik;



function liczba(n){
    
        document.getElementById('dzialanie').innerHTML+=n;

}

function kropka(){
    document.getElementById('dzialanie').innerHTML+=".";
}

function wyczysc(){
    
    document.getElementById('dzialanie').innerHTML='';
    document.getElementById('dzialanie_stare').innerHTML='';
    dod1="";
    dod2="";
    odj1="";
    odj2="";
    mnoz1="";
    mnoz2="";
    dziel1="";
    dziel2="";
}

function dodawanie(){
    dod1=document.getElementById('dzialanie').innerHTML;

    document.getElementById('dzialanie_stare').innerHTML=document.getElementById('dzialanie').innerHTML+"+";
    
    document.getElementById('dzialanie').innerHTML="";
    
}

function odejmowanie(){
    odj1=document.getElementById('dzialanie').innerHTML;

    document.getElementById('dzialanie_stare').innerHTML=document.getElementById('dzialanie').innerHTML+"-";

    document.getElementById('dzialanie').innerHTML="";
    
}

function mnozenie(){
    mnoz1=document.getElementById('dzialanie').innerHTML;

    document.getElementById('dzialanie_stare').innerHTML=document.getElementById('dzialanie').innerHTML+"*";

    document.getElementById('dzialanie').innerHTML="";
    
}

function dzielenie(){
    dziel1=document.getElementById('dzialanie').innerHTML;

    document.getElementById('dzialanie_stare').innerHTML=document.getElementById('dzialanie').innerHTML+"/";

    document.getElementById('dzialanie').innerHTML="";
    
}







function rowne(){
    if(dod1!=""){
        
        dod2=document.getElementById('dzialanie').innerHTML;
        document.getElementById('dzialanie_stare').innerHTML+=dod2+"=";
        wynik=dod1*1+dod2*1;
        document.getElementById('dzialanie').innerHTML=wynik;
        dod1="";
        dod2="";
    }

    else if(odj1!=""){
        
        odj2=document.getElementById('dzialanie').innerHTML;
        document.getElementById('dzialanie_stare').innerHTML+=odj2+"=";
        wynik=odj1*1-odj2*1;
        document.getElementById('dzialanie').innerHTML=wynik;
        odj1="";
        odj2="";
    }

    else if(mnoz1!=""){
        
        mnoz2=document.getElementById('dzialanie').innerHTML;
        document.getElementById('dzialanie_stare').innerHTML+=mnoz2+"=";
        wynik=mnoz1*1*mnoz2*1;
        document.getElementById('dzialanie').innerHTML=wynik;
        mnoz1="";
        mnoz2="";
    }

    else if(dziel1!=""){
        
        dziel2=document.getElementById('dzialanie').innerHTML;
        document.getElementById('dzialanie_stare').innerHTML+=dziel2+"=";
        wynik=dziel1*1/dziel2*1;
        document.getElementById('dzialanie').innerHTML=wynik;
        dziel1="";
        dziel2="";
    }
}

