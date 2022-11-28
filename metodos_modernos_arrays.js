//!Modificar un elemento en particular con .map() -> modifica arrays o objetos

let arrayBool = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

let falseBool = arrayBool.map((bool, i)=>{
    return (bool == false) ? `${i + 1} - ${bool}`: bool;
})

//TODO Ordernar de mayor a menor o menor a mayor con sort() -> ordena un array o objeto
const listaObjetos = [
    {nombre: "luis", edad: 29},
    {nombre: "pedro", edad: 25},
    {nombre: "juan ", edad: 56},
    {nombre: "jose", edad: 17},
    {nombre: "albert", edad: 44},

]

listaObjetos.sort((a,b)=>b.edad - a.edad)


//* Comparar arrays con .every() -> devuelve true o false

let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4]

const comparar = arr1.every((val)=> typeof val === "number")

console.log(comparar)


function compararArr(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    let resultado = arr1.every((val, i)=> val === arr2[i])
    return resultado
}

console.log(compararArr(arr1, arr2))