function contarLetras(str, char) {
    const repeticiones = 0;
    for (const posicion = 0; posicion < str.length; posicion++) 
    {
      if(str.charAt(posicion) === char) 
        repeticiones += 1;
      }
    return repeticiones;
  }

  module.exports = contarLetras