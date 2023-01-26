import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response
}

function deleteData(urlApi){
    const response = fetch(urlApi,{
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
    });
    return response
}

function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10 
}

// putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
//     .then(response => response.json())
//     .then(dataUpdate => console.log(dataUpdate));

// const data = {
//     "title": "Carritos",
//     "price": 2000,
//     "description": "A description",
//     "categoryId": 3,
//     "images": ["https://placeimg.com/640/480/any"]
// }

// postData(`${API}/products`, data)
//     .then(response => response.json())
//     .then(data =>console.log(data))
//     .catch(error => console.log(error))

// let idNumber = 340

// deleteData(`${API}/products/${idNumber}`)
//     .then(()=>console.log(`Se borro el elemento ${idNumber}`))
