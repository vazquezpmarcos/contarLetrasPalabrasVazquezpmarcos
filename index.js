function contarLetras(str, char) {
    let repeticiones = 0;
    for (let posicion = 0; posicion < str.length; posicion++) 
    {
      if(str.charAt(posicion) === char) 
        repeticiones += 1;
      }
    return repeticiones;
  }

  module.exports = contarLetras