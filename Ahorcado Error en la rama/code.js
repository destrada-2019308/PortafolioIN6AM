function decision ()
{
    var array = ["agua", "vaso", "asd", "juan"];
    var aleatorio=Math.floor((Math.random()*4));
    console.log(array[aleatorio]);
    
    //document.getElementById("mostrar").innerHTML = (array[aleatorio])
}

decision();

const getValueInput = () =>{
    let valorInput = document.getElementById("obtener").value;
    console.log(valorInput);
}



const validarLetra = () =>{
    var btn = document.getElementById("boton");
    console(btn);

}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(25,25);
ctx.lineTo(50,50);
ctx.stroke();
