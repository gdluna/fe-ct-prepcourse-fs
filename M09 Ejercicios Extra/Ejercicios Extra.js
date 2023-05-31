/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArreglo = [];
   var i = 0;
   for (let prop in objeto) {
      /* console.log (prop);
      console.log (objeto[prop]); */
      nuevoArreglo[0, i] = [prop, objeto[prop]];
      i++;
   }
   return nuevoArreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arregloString = string.split('');
   arregloString.sort();
   var objeto = {};
   var letraAnt = '';
   for (i = 0; i < arregloString.length; i++) {
      if (arregloString[i] !== letraAnt) {
         objeto[arregloString[i]] = 1;
      } else {
         objeto[arregloString[i]] = objeto[arregloString[i]] + 1;
      }
      letraAnt = arregloString[i];
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayString = string.split('');
    var nuevoArray = [];
    for (i = 0; i < arrayString.length; i++) {
        if (arrayString[i].charCodeAt() >= 65 && arrayString[i].charCodeAt() <= 90){
           nuevoArray.push(arrayString[i]);
        }
    }
    for (i = 0; i < arrayString.length; i++) {
        if (arrayString[i].charCodeAt() >= 97 && arrayString[i].charCodeAt() <= 122){
            nuevoArray.push(arrayString[i]);
        }
    }
    var nuevoString = nuevoArray.join('')
    return nuevoString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseSeparada = frase.split('');
   var palabras = [];
   var palabra = [];
   var letra = '';
   var indicePalabra = 0;
   for (i = 0; i <= fraseSeparada.length; i++) {
      if (fraseSeparada[i] !== ' ' && i < fraseSeparada.length) {
         palabra.push(fraseSeparada[i]);
      } else {
         palabras[indicePalabra] = palabra;
         palabra = [];
         indicePalabra++;
      }
   }
   for (i = 0; i < palabras.length; i++) {
      for (j = 0; j < palabras[i].length; j++) {
         letra = palabras[i][j];
         palabras[i].splice(j, 1);
         palabras[i].unshift(letra);
      }
      palabras[i] = palabras[i].join('');
   }
   var nuevaFrase = palabras.join(' ');
   return nuevaFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var arrayNumero = numero.toString();
   arrayNumero = arrayNumero.split('');
   if ((arrayNumero[0] === arrayNumero[arrayNumero.length - 1]) && (arrayNumero[1] === arrayNumero[arrayNumero.length - 2])) {
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringArray = string.split('');
   var letrasAbc = stringArray.map(n => {
       if (n[0] !== 'a' && n[0] !== 'á' && n[0] !== 'A' && n[0] !== 'Á' && n[0] !== 'b' && n[0] !== 'B' && n[0] !== 'c' && n[0] !== 'C') {
           return n;
       }
   });
   for (i = letrasAbc.length-1; i >=0; i--) {
       if (letrasAbc[i] === undefined) {
           letrasAbc.splice(i,1);
       }
   }
   
   return letrasAbc.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArray = [];
   var elemento = '';
   var indice = null;
   do {
       for (i = 0; i < arrayOfStrings.length; i++) {
           //  console.log(arrayOfStrings[i].length + ' - ' + elemento.length);
           if (arrayOfStrings[i].length >= elemento.length) {
               //console.log(arrayOfStrings[i].length + ' - ' + elemento.length);
               elemento = arrayOfStrings[i];
               indice = i;
           }
       }
       nuevoArray.unshift(elemento);
       arrayOfStrings[indice] = '';
       elemento = '';
       indice = null;

   } while (nuevoArray.length < arrayOfStrings.length)
   return nuevoArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayInterseccion = [];
   for (i = 0; i < array1.length; i++) {
       for (j = 0; j < array2.length; j++) {
           if (array1[i] === array2[j]) {
               if (arrayInterseccion.length === 0) {
                   arrayInterseccion.push(array2[0]);
               } else {
                   existe = false;
                   for (k = 0; k < arrayInterseccion.length; k++) {
                       if (array2[j] === arrayInterseccion[k]) {
                           existe = true;
                       }
                   }
                   if (!existe) {
                       arrayInterseccion.push(array2[j]);
                   }
               }
           }
       }
   }
   return arrayInterseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
