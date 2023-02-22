const API = 'https://api.escuelajs.co/api/v1'
const content = null || document.getElementById('content')


async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = response.json()
    return data;
}

(async () => {
    try {
      const products = await fetchData(`${API}/products?offset=20&limit=8`);
  
      let view = `
      ${products
        .map(
          (product) =>
            `<a href="" class="block">
            <img
            src="${product.images[0]}"
            alt="${product.title}'s image"
            class="object-cover w-full h-72 rounded-bl-3xl rounded-tr-3xl transition duration-500 hover:rounded-none"
            />
    
            <div class="flex items-center justify-center mt-4 space-x-4">
              <p class="font-medium text-zinc-100 hover:text-indigo-300">${product.title}</p>
        
              <span class="w-8 h-px bg-yellow-500"></span>
        
              <p class="text-zinc-400">$${product.price} / ${product.category.name}</p>
            </div>
          </a>
        `
        )
        .join("")}`;
      content.innerHTML = view;
    } catch (error) {
      console.log(error);
    }
  })();
  