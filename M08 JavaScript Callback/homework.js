/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var nombreSeparado = nombre.split('');
   var nuevoNombre = "";
   nombreSeparado[0] = nombreSeparado[0].toUpperCase();
   for (let i = 0; i < nombreSeparado.length; i++) {
      nuevoNombre = nuevoNombre + nombreSeparado[i];
   }
   return nuevoNombre;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sumaNumerosArray = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      sumaNumerosArray = sumaNumerosArray + arrayOfNumbers[i];
   }
   cb(sumaNumerosArray);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(e => {
      cb(e);
  });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   
   var nuevoArray = [];
   for (i = 0; i < array.length; i++) {
      nuevoArray.push(cb(array[i]));
   }
   return nuevoArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var comienzaConLetraA = arrayOfStrings.map(n => {
      console.log(n[0]);
      if (n[0] === 'a' || n[0] === 'á' || n[0] === 'A' || n[0] === 'Á') {
          return n;
      }
   });
   
   for (i = comienzaConLetraA.length-1; i >=0 ; i--) {
      if (comienzaConLetraA[i] === undefined) {
         comienzaConLetraA.splice(i,1);
      }
   }
   return comienzaConLetraA;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
