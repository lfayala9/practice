function* iterate(arr){
    for(let val of arr){
        yield val
    }
}

const ir = iterate(['Luis','Carlos','Pepe','Jose'])

console.log(ir)
console.log(ir.next());