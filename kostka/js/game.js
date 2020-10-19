var hody = [];
var zivoty = 4;
var zivoty1 = 4;
var hodydruhy = [];


document.getElementById('game').addEventListener('click',
    function(){
        hod();
        console.log(hody);
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 20;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}




//jjklhljsh gksgshglkjseg//


document.getElementById('druhy').addEventListener('click',
    function(){
        hoddruhy();
        console.log(hodydruhy);
    }
);

function sum(cislo) {
    var suma = 0;
    cislo.forEach(function(value,index){
        suma += value;
    })
    return suma;
}

function maximum2(cislo) {
    var maxi = 1;
    cislo.forEach(function(value2,index){
        if (value2 > maxi) maxi = value2;
    })
    return maxi;
}

function minimum2(cislo) {
    var mini = 20;
    cislo.forEach(function(value2,index){
        if (mini > value2) mini = value2;
    })
    return mini;
}

function average2(suma, counta) {
    return (suma / counta).toFixed(2);
}

/*function porovnavani2(g, h) { 
        if (h < g) {
            pocet1++;
            return pocet1;
        } 
        else if (h > g){
            pocet1--;
            return pocet1;
        }
        else return pocet1;
}*/

function porovnavani(a, b) { 
    var y=zivoty;

    if (b < a) {
        zivoty++;
        return y++;
    } 
    else if (b > a){
        zivoty--;
        return y--;
    }
    else {
        return y;
    }
}

function  porovnavani2(a, b) { 
    var x = zivoty1;
        if (b > a) {
            zivoty1++;
            return x++;
        } 
        else if (b < a){
            zivoty1--;
            return x--;
        }
        else{
            return x;
        }

   // if(pocet=0){
   //     document.getElementById('vitez').innerHTML = '<p>Vyhral jsi</p>';
   // }
}



function hoddruhy() {
    var g = Math.ceil(Math.random() * 20);
    hodydruhy.push(g);
    document.getElementById('cube1').src='img/kostka' + g + '.png';
    document.getElementById('resultdruhy').innerHTML = '<p>Hod: ' + g + '</p>';
    document.getElementById('resultdruhy').innerHTML += 
        '<p>Počet hodů: ' + hodydruhy.length + '</p>';
    document.getElementById('resultdruhy').innerHTML += 
        '<p>Součet hodů: ' + sum(hodydruhy) + '</p>';
    document.getElementById('resultdruhy').innerHTML += 
        '<p>Průměr hodů: ' + average2(sum(hodydruhy),hodydruhy.length) + '</p>';
    document.getElementById('resultdruhy').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum2(hodydruhy) + '</p>';
    document.getElementById('resultdruhy').innerHTML += 
        '<p>Nejnišší hod: ' + minimum2(hodydruhy) + '</p>';
    document.getElementById('resultdruhy').innerHTML +=  
        '<p>Zivoty: ' + porovnavani2(hody[hody.length-1], g) + '</p>';   
    return g;
}




function hod() {
    var h = Math.ceil(Math.random() * 20);
    hody.push(h);
    document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejnišší hod: ' + minimum(hody) + '</p>';
    document.getElementById('result').innerHTML +=  
        '<p>Zivoty: ' + porovnavani(h, hodydruhy[hodydruhy.length-1]) + '</p>';   
    return h;
}



  /*function zivoty2() { 
    
    //var greeting2= 4;
    var zivo2 ="4";
    /*if (g > h) {
        greeting2--;
        return greeting2;
    } 
    else if (h>g){
        greeting2++;
        return greeting2;
    }*/
    //document.getElementById('zivotyh').innerHTML = 'Zivoty: ' + greeting2;
   /* document.getElementById('j').innerHTML = 'Zivoty: ' + zivo2;
  }*/

