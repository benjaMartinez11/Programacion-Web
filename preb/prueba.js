const productos = [
    { nombre: "Notebook", precio: 800 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Teclado", precio: 50 },
  ];

 // console.log(productos)


 const objeto = {
    nombre: "Federico", 
    edad: 29
 }
const lista = [0,1,2]
 console.log(objeto.nombre) //accedo a la propiedad del objeto por medio del punto
console.log(lista[0]) //accedo a un elemento del arreglo por medio de su posicion 



 productos.forEach( function(producto, index){
 if (producto.precio < 300){
    console.log("barato", producto.precio)
 }
 else{
    console.log("caro", producto.precio)
 }

 }
)

//en los parametros de una funcion van a ir lo que luego recibira para procesar 
function obtenerPrecioPromedio(arreglo){
arreglo.forEach( function( index){
   for(let i = 0; i < productos.length ; i++){
})
   console.log("nuevo", arreglo)
}
obtenerPrecioPromedio(productos)
///800+500+50=1350÷450
