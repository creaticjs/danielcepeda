var cont=0;
var cont1=0;
var cont2=0;
var total=0;

function operacion(a, palabra) {
    cont1++;
    
    var posPalabra = palabra.indexOf(a);
    //console.log(posPalabra);
    if (posPalabra != -1) {
        
        for (var k = 0; k < palabra.length; k++) {
            if (palabra[k] == a) {
                cont++;
                document.getElementById(a).style.backgroundColor = "green";
                document.getElementById(a).disabled = true;
                document.getElementById(a).style.color = "black";
                escribir(a, k);
            }
        }
    }
    else {
        cont2++;
        document.getElementById(a).style.backgroundColor = "red";
        document.getElementById(a).disabled = true;
        document.getElementById(a).style.color = "black";
        document.getElementById(a).value = a;
        
        document.getElementById("imgTag").src="/img/imagen"+cont2+".png";

        
    
    }

    
    
    
    if(cont==palabra.length)
    {
        alert("GAAAAAANASTEEEEE");
        location.reload();
    }
    else if(cont2==11 || cont1==11)
    {
        alert("PERDISTEEE");
        location.reload();
    }


}



function escribir(a, b) {
    document.getElementById(b).value = a;
}


function genera_tabla() {

    
        
        

        var listaPalabras = ['agua', 'persona', 'aguacate', 'cama', 'estatua', 'elefante', 'telefono', 'automovil', 'jupiter', 'bombillo'];

        var numAleatorio = getRandomInt(1, listaPalabras.length);


        var palabra = listaPalabras[numAleatorio];

        var tamPalabra = palabra.length;
        //console.log(numAleatorio);
        //console.log(palabra);
        //console.log(tamPalabra);







        var letras = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var contador = 0;
        // Obtener la referencia del elemento body
        var body = document.getElementsByTagName("body")[0];


        



        

        var divImagen = document.createElement("div");
        divImagen.setAttribute("id","divImagen");
        var imgTag = document.createElement("img");
        imgTag.setAttribute("id","imgTag");
        divImagen.appendChild(imgTag);
        body.appendChild(divImagen);

        
        var divPalabra = document.createElement("div");//
        divPalabra.setAttribute("id","palabra");

        for (var k = 0; k < tamPalabra; k++) {
            var texto = document.createElement("input");
            texto.setAttribute("type", "text");
            texto.setAttribute("class", "cajatexto");
            texto.setAttribute("id", String(k));
            divPalabra.appendChild(texto);
            body.appendChild(divPalabra);
        }

        // Crea un elemento <table> y un elemento <tbody>
        var tabla = document.createElement("table");
        tabla.setAttribute("id","tabla");
        var tblBody = document.createElement("tbody");

        // Crea las celdas
        for (var i = 0; i < 3; i++) {
            // Crea las hileras de la tabla
            var hilera = document.createElement("tr");

            for (var j = 0; j < 9; j++) {
                contador++;
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var celda = document.createElement("td");
                var btnLetra = document.createElement("input");
                btnLetra.setAttribute("type", "button");
                //console.log(letras[contador]);
                btnLetra.setAttribute("value", letras[contador]);
                btnLetra.setAttribute("class", "botonLetra");
                btnLetra.setAttribute("id", letras[contador]);
                //btnLetra.setAttribute("onclick", "operacion('" + letras[contador] + "')");
                btnLetra.setAttribute("onclick", "operacion('" + letras[contador] + "'" + "," + "'" + palabra + "')");

                //.setAttribute('onclick','doSomething();' + onclick); 
                //var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
                celda.appendChild(btnLetra);
                hilera.appendChild(celda);
            }

            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(hilera);
        }

        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        //tabla.setAttribute("border", "2");

        document.getElementById("inicio").disabled=true;

    }




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}