var palabra = 'carlos';
String.prototype.reverse = function() {
    var palabraRev = '';
    for( var i = (this.length - 1); i >= 0; i-- ){
      palabraRev = palabraRev + this.charAt(i);
    }
    return palabraRev;
  }

  var palabraReversada = palabra.reverse();
  console.log('tu palabra es: '+ palabra);
  console.log('tu palabra reversada es: '+ palabraReversada);
