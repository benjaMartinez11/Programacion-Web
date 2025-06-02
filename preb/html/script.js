let arreglo = [1,2,3]


for(let i = 0; i < arreglo.length; i++){

}


//map, 
const nuevoArreglo = arreglo.map( (item, index)=> (
     item + 1
))


const mapFuncionNormal = arreglo.map( function(item, index){
    return item + 1 
})

console.log("arreglo original", arreglo, "nuevo arreglo", nuevoArreglo)

 

const mapbenja = arreglo.forEach( function(item, index){
    return item + 1
})

console.log(mapbenja)

var array = [10, 11, 12, 13, 14, 15, 16, 17];
array.pop();
console.log(array);
