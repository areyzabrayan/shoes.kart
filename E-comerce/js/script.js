// import {hombre, mujer, niños, deportivos, etiqueta, personalizados } from "./datashoes.js";
// const URL_API = "http://localhost:3000/";

// let random = [];

// function randShoes(arr) {
//   console.log(arr)
//   for (let i = 0; i < 6; i++) {
//     let rand = arr[Math.floor(Math.random() * arr.length)];
//     random.push(rand);
//   }
//   return random;
// }

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const shoes = await getShoes(URL_API);
//     randShoes(shoes);
//     printCards(random, containerCards);
//     addInfoClickEvent();
//   } catch (error) {
//     console.log(error);
//   }
// });

// const getShoes = async (url) => {
//   try {
//     const endpoint = "shoes";
//     const resp = await fetch(`${URL_API}${endpoint}`);
//     const response = await resp.json();
//     return response;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };



// const printCards = (shoes, container) => {
//   container.innerHTML = "";
//   shoes.forEach((element, index) => {
//     container.innerHTML += `
//         <article class="card">
//         <figure class="card__figure">
//         <img src=${element.imagen} alt=${element.nombre}>
//         <div class="card__infoImage">
//         <div class="info">
//         <span class="material-symbols-outlined" class="info">
//         info
//         </span>
//         </div>
//         <div  class="favorite">
//         <span class="material-symbols-outlined">
//                     favorite
//                     </span>
//                     </div>
//                     <div  class="cart">
//                     <span class="material-symbols-outlined cartC" data-id="${element.id}">
//                     shopping_cart
//                     </span>
//                     </div>
//         </div>
//     </figure>
//     <section class="card__body">
//     <h3 class="card__name">${element.nombre}</h3>
//     <h4 class="card__marca">${element.marca}</h4>
//     <span class="card__price">$${Number(element.precio)}</span>
//     <br>
//     <span class="card__stock">${Number(element.stock)}</span>  
//     </section>
//     <section class="card__button">
//                 <button class="card__btn">Add</button>
//     </section>
//     </article>`;
//   });

// };


// if (categoriaHombre && categoriaMujer && categoriaNiños && categoriaDeportivos && categoriaEtiqueta && categoriaPersonalizados) {
//   categoriaHombre.addEventListener("click", function () {
//     const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Hombre");
//     printCards(filteredShoes, containerCards);
//   });

//   categoriaMujer.addEventListener("click", function () {
//     const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Mujer");
//     printCards(filteredShoes, containerCards);
//   });

//   categoriaNiños.addEventListener("click", function () {
//     const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Niños");
//     printCards(filteredShoes, containerCards);
//   });

//   categoriaDeportivos.addEventListener("click", function () {
//     const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Deportivos");
//     printCards(filteredShoes, containerCards);
//   });

//   categoriaEtiqueta.addEventListener("click", function () {
//     const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Etiqueta");
//     printCards(filteredShoes, containerCards);
//   });

//   categoriaPersonalizados.addEventListener("click", function () {
//     const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Personalizados");
//     printCards(filteredShoes, containerCards);
//   });
// };

//  const shoes = await getShoes(URL_API);
// printCards(shoes, containerCards);

// const addInfoClickEvent = () => {
//   const icons = document.querySelectorAll('.info');

//   icons.forEach((icon) => {
//     icon.addEventListener('click', function () {
//       const index = icon.getAttribute("data-index");
//       window.location.href = `./pages/info.html?index=${index}`;
//     });
//   });
// };

// let sendToFavorite = document.getElementById("openFavorite");

// sendToFavorite.addEventListener("click", () =>{
//   console.log('hice click');
//   location.href ="./pages/favorite.html"
// })

// let sendToCart = document.getElementById("openCart");

// sendToCart.addEventListener("click", () =>{
//   console.log('hice click');
//   location.href ="./pages/cart.html"
// })


//   document.addEventListener ("click", (e)=> {
//     if (e.target.classList.contains("cartC")){  
//       let id = e.target.getAttribute("data-id");
//         addtocart(id)
      
//     }
// });
// const addtocart = post(`${URL_API}${endpoint}`, { 
//       method: 'POST',
//       body: JSON.stringify(product),
//       headers:{
//         "contet-type":"aplicattion/json"
//       }
//     })
  
const URL_API = "http://localhost:3000/";

let random = [];
// let shoes = [];

function randShoes(arr) {
  console.log(arr);
  for (let i = 0; i < 6; i++) {
    let rand = arr[Math.floor(Math.random() * arr.length)];
    random.push(rand);
  }
  return random;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const shoes = await getShoes(URL_API);
    randShoes(shoes);
    printCards(random, containerCards);
    addInfoClickEvent();
  } catch (error) {
    console.log(error);
  }
});

const getShoes = async (url) => {
  try {
    const endpoint = "shoes";
    const resp = await fetch(`${URL_API}${endpoint}`);
    const response = await resp.json();
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const printCards = (shoes, container) => {
  container.innerHTML = "";
  shoes.forEach((element, index) => {
    container.innerHTML += `
        <article class="card">
        <figure class="card__figure">
        <img src=${element.imagen} alt=${element.nombre}>
        <div class="card__infoImage">
        <div class="info">
        <span class="material-symbols-outlined" class="info">
        info
        </span>
        </div>
        <div  class="favorite">
        <span class="material-symbols-outlined btnLike" data-id="${element.id}">
                    favorite
                    </span>
                    </div>
                    <div  class="cart">
                    <span class="material-symbols-outlined cartC" data-id="${element.id}">
                    shopping_cart
                    </span>
                    </div>
        </div>
    </figure>
    <section class="card__body">
    <h3 class="card__name">${element.nombre}</h3>
    <h4 class="card__marca">${element.marca}</h4>
    <span class="card__price">$${Number(element.precio)}</span>
    <br>
    <span class="card__stock">${Number(element.stock)}</span>  
    </section>
    <section class="card__button">
                <button class="card__btn">Add</button>
    </section>
    </article>`;
  });
};

if (categoriaHombre && categoriaMujer && categoriaNiños && categoriaDeportivos && categoriaEtiqueta && categoriaPersonalizados) {
     categoriaHombre.addEventListener("click", function () {
       const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Hombre");
       printCards(filteredShoes, containerCards);
     });
  
     categoriaMujer.addEventListener("click", function () {
       const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Mujer");
       printCards(filteredShoes, containerCards);
     });
  
     categoriaNiños.addEventListener("click", function () {
       const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Niños");
       printCards(filteredShoes, containerCards);
     });
  
     categoriaDeportivos.addEventListener("click", function () {
       const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Deportivos");
       printCards(filteredShoes, containerCards);
     });
  
     categoriaEtiqueta.addEventListener("click", function () {
       const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Etiqueta");
       printCards(filteredShoes, containerCards);
     });
  
     categoriaPersonalizados.addEventListener("click", function () {
       const filteredShoes = shoes.filter((shoe) => shoe.categoria === "Personalizados");
       printCards(filteredShoes, containerCards);
     });
   };
   const shoes = await getShoes(URL_API);
   printCards(shoes, containerCards);

const addInfoClickEvent = () => {
  const icons = document.querySelectorAll('.info');

  icons.forEach((icon) => {
    icon.addEventListener('click', function () {
      const index = icon.getAttribute("data-index");
      window.location.href = `./pages/info.html?index=${index}`;
    });
  });
};

let sendToFavorite = document.getElementById("openFavorite");

sendToFavorite.addEventListener("click", () =>{
  console.log('hice click');
  location.href ="./pages/favorite.html"
});

let sendToCart = document.getElementById("openCart");

sendToCart.addEventListener("click", () =>{
  console.log('hice click');
  location.href ="./pages/cart.html"
})

 document.addEventListener ("click", (e)=> {
        if (e.target.classList.contains("cartC")){
          console.log('hice click');  
        const id = e.target.getAttribute("data-id");
        addToCart(id);
      }
      });
      const addToCart = (id) => {
        // Obtener los datos del elemento que deseas agregar a favoritos
        const item = shoes.find((shoe) => shoe.id === id);

        // Enviar una solicitud POST a la API para agregar el elemento a "favorite"
        fetch(`${URL_API}cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        })
          .then((response) => response.json())
          .then((data) => {
            alert('Elemento agregado a carrito:', data);
            // Realizar las acciones necesarias después de agregar el elemento a favoritos
          })
          .catch((error) => {
            console.log('Error al agregar elemento a carrito:', error);
          });
      };

      document.addEventListener ("click", (e)=> {
        if (e.target.classList.contains("btnLike")){
          console.log('hice click');  
        const id = e.target.getAttribute("data-id");
        addToFavorites(id);
      }
      });

      const addToFavorites = (id) => {
        // Obtener los datos del elemento que deseas agregar a favoritos
        const item = shoes.find((shoe) => shoe.id === id);
      
        

        // Enviar una solicitud POST a la API para agregar el elemento a "favorite"
        fetch(`${URL_API}favorite`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        })
          .then((response) => response.json())
          .then((data) => {
            alert('Elemento agregado a favoritos:', data);
            // Realizar las acciones necesarias después de agregar el elemento a favoritos
          })
          .catch((error) => {
            console.log('Error al agregar elemento a favoritos:', error);
          });
      };

// let sendToCart = document.getElementById("openCart");

// sendToCart.addEventListener("click", () =>{
//   console.log('hice click');
//   location.href ="./pages/cart.html"
// })

// document.addEventListener ("click", (e)=> {
//        if (e.target.classList.contains("cartC")){  
//         const id = e.target.getAttribute("data-id");
//         const categoria = e.target.getAttribute("data-categoria");
//         const nombre = e.target.getAttribute("data-nombre");
//         const precio = e.target.getAttribute("data-precio");
//         const stock = e.target.getAttribute("data-stock");
//         const imagen = e.target.getAttribute("data-imagen");
//         const marca = e.target.getAttribute("data-marca");
//          console.log('hice click');  
//          addtocart(id, categoria, nombre, precio, stock, imagen, marca)
        
//        }
//    });
// const addtocart = async (id, categoria, nombre, precio, stock, imagen, marca) => {
//   try {
//     const endpoint = 'cart';
//     const product = { 
//       id: id,
//       categoria: categoria,
//       nombre: nombre,
//       precio: precio,
//       stock: stock,
//       imagen: imagen,
//       marca: marca
//      };
//     const response = await fetch(`${URL_API}${endpoint}`, {
//       method: 'POST',
//       body: JSON.stringify(product),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }
