const doTask = (iterations) => new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6"
        });
      }
    }
    resolve({
      error: false,
      value: numbers
    });
  });

  doTask(1)
  .then(result => console.log("Tiradas correctas: ", result.value))
  .catch(err => console.error("Ha ocurrido algo: ", err.message));




const doTask2 = async (iterations) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
      return {
        error: true,
        message: "Se ha sacado un 6"
      };
    }
  }
  return {
    error: false,
    value: numbers
  };
}

const resultado = await doTask2(1);
console.log(resultado)

// Otra forma de entenderlo

const getDatos = ()=>{
  return new Promise((resolve, reject)=>{
      if(datos.length === 0){
          reject(new Error('No existen datos'))
      }
      
      setTimeout(()=>{
          resolve(datos)
      },1500)
  })
}

async function fetchingData(){
  try{
      const datosFetched = await getDatos();
      console.log(datosFetched)
      
  }catch(err){
      console.log(err)
  }
}

fetchingData()