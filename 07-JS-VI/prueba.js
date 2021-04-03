var array = [1, 2, 3, 7, 5, 4, 6];
var nuevoArray = array.reduce(function(acc, cv){
    if(acc > cv){
        return acc;
    }else{
        return cv;
    }
}, array[0])

console.log(nuevoArray);