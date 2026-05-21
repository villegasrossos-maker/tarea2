function cambia1() {
    document.getElementById("Temperatura").style.display = "none";
    document.getElementById("Convinaciones").style.display = "block";
}

function cambia2() {
    document.getElementById("Temperatura").style.display = "block";
    document.getElementById("Convinaciones").style.display = "none";
}

function form1() {
    var a = parseFloat(document.getElementById("To").value);
    var b = parseFloat(document.getElementById("Ts").value);
    var cons = parseFloat(document.getElementById("K").value);
    var t = parseFloat(document.getElementById("Tiempo").value);
    
    let temperatura = Math.round(b + (a - b) * Math.exp(-cons * t));
    document.getElementById("Respuesta").innerHTML = "La Respuesta es: " + temperatura + " °C";
}

function factorial(fac){
    if(fac <= 1){
        return 1;
    }
    else{
        return fac * factorial(fac - 1);
    }
}

function form2(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var r1 = parseFloat(document.getElementById("r1").value);
    var resultado1 = factorial(n1)/(factorial(r1)*factorial(n1-r1));

    var n2 = parseFloat(document.getElementById("n2").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var resultado2 = factorial(n2)/(factorial(r2)*factorial(n2-r2));
    let resultado3=resultado1*resultado2;

    document.getElementById("Respuesta22").innerHTML = "La Respuesta es: " + resultado3;
}