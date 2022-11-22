let arrayBool = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

let falseBool = arrayBool.map((bool, i)=>{
    return (bool == false) ? `${i + 1} - ${bool}`: bool;
})

console.log(falseBool)