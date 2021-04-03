var array = ['alberto', 'angela', 'santiago', 'andres', 'camilo', 'anderson'];
var nuevoArray = [];
array.forEach(function(actual){
  if(actual[0] === 'a'){
    nuevoArray.push(actual);
  }
})
console.log(nuevoArray);