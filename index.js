function contarLetras(str, char) {
    var repeticiones = 0;
    for (var posicion = 0; posicion < str.length; posicion++) 
    {
      if(str.charAt(posicion) == char) 
        repeticiones += 1;
      }
    return repeticiones;
  }

  module.exports = contarLetras