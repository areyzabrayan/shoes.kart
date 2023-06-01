// const URL_API = "http://localhost:3000/cart";


// const getShoes = async (url) => {
//     try {
//         const shoeData = await getShoes(url);
//         const cartContainer = document.getElementById('cartContainer');
//         printCards(shoeData, cartContainer);
//       } catch (error) {
//         console.log(error);
//         return [];
//       }
//   };

// const printCards = (cart, container) => {
//     container.innerHTML = "";
//     cart.forEach((element, index) => {
//       if (cart.some((cartItem) => cartItem.id === element.id)){
//         container.innerHTML += `
//           <article class="card">
//           <figure class="card__figure">
//           <img src=${element.imagen} alt=${element.nombre}>
//           <div class="card__infoImage">
//           <div class="info">
//           <span class="material-symbols-outlined" class="info">
//           info
//           </span>
//           </div>
//           <div  class="favorite">
//           <span class="material-symbols-outlined">
//                       favorite
//                       </span>
//                       </div>
//                       <div  class="cart">
//                       <span class="material-symbols-outlined">
//                       shopping_cart
//                       </span>
//                       </div>
//           </div>
//           <div class="deletCard">
//           <span class="material-symbols-outlined">
//                       Delete
//                       </span>
//             </div>
//       </figure>
//       <section class="card__body">
//       <h3 class="card__name">${element.nombre}</h3>
//       <h4 class="card__marca">${element.marca}</h4>
//       <span class="card__price">$${Number(element.precio)}</span>
//       <br>
//       <span class="card__stock">${Number(element.stock)}</span>  
//       </section>
//       <section class="card__button">
//                   <button class="card__btn">Add</button>
//       </section>
//       </article>`;
//       }
//     });
//   };
  
// const URL_API = "http://localhost:3000/cart";

// const getShoes = async (url) => {
//   try {
//     const resp = await fetch(url);
//     const shoeData = await resp.json();
//     const cartContainer = document.getElementById('cartContainer');
//     printCards(shoeData, cartContainer);
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// const printCards = (cart, container) => {
//   container.innerHTML = "";
//   cart.forEach((element, index) => {
//     container.innerHTML += `
//       <article class="card">
//         <figure class="card__figure">
//           <img src=${element.imagen} alt=${element.nombre}>
//           <div class="card__infoImage">
//             <div class="info">
//               <span class="material-symbols-outlined" class="info">
//                 info
//               </span>
//             </div>
//             <div  class="favorite">
//               <span class="material-symbols-outlined">
//                 favorite
//               </span>
//             </div>
//             <div  class="cart">
//               <span class="material-symbols-outlined">
//                 shopping_cart
//               </span>
//             </div>
//           </div>
//           <div class="deletCard">
//             <span class="material-symbols-outlined">
//               Delete
//             </span>
//           </div>
//         </figure>
//         <section class="card__body">
//           <h3 class="card__name">${element.nombre}</h3>
//           <h4 class="card__marca">${element.marca}</h4>
//           <span class="card__price">$${Number(element.precio)}</span>
//           <br>
//           <span class="card__stock">${Number(element.stock)}</span>  
//         </section>
//         <section class="card__button">
//           <button class="card__btn">Add</button>
//         </section>
//       </article>`;
//   });
// };

// // Llama a la función getShoes con la URL_API
// getShoes(URL_API);
const URL_API = "http://localhost:3000/cart";

const shoesData = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getShoes = async (url) => {
  try {
    const shoeData = await shoesData(url);
    const cartContainer = document.getElementById('cartContainer');
    printCards(shoeData, cartContainer);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const printCards = (cart, container) => {
  container.innerHTML = "";
  cart.forEach((element) => {
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
              <span class="material-symbols-outlined">
                favorite
              </span>
            </div>
          </div>
          <div class="deletCard">
            <span class="material-symbols-outlined delete" data-id="${element.id}">
              Delete
            </span>
          </div>
        </figure>
        <section class="card__body">
          <h3 class="card__name">${element.nombre}</h3>
          <h4 class="card__marca">${element.marca}</h4>
          <span class="card__price">$${Number(element.precio)}</span>
          <br>
          <span class="card__stock">${Number(element.stock)}</span>  
        </section>
      </article>`;
  });
};

// Llama a la función getShoes con la URL_API
getShoes(URL_API);

// const addDeleteButton = () => {
// 	const likes = document.querySelectorAll('.delet');
// 	likes.forEach((icon) => {
// 		icon.addEventListener('click', function () {
// 			let id = icon.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
//             removeFromCart(id)
// 			//window.location.href = `./pages/info.html?index=${index}`;
// 			//alert("Le dimos like a este objeto ", index)
// 		});
// 	});
// }
// const removeFromFavorites = (id) => {
//     let data = getCart();
//     let isCart = data.find(item => item.id == id);
//     if (isCart != null) {
//         let newCart = data.filter(item => item.id != id)
//         localStorage.setItem("cart", JSON.stringify(newCart))
//         location.reload();
//     } else {
//         alert("Este no es un articulo favorito")
//     }
// }

// document.addEventListener ("click", (e)=> {
//   if (e.target.classList.contains("delete")){
//     console.log('hice click');  
//   const id = e.target.getAttribute("data-id");
//   deleteToCart(id);
// }
// });
// const deleteToCart = (id) => {
//   // Obtener los datos del elemento que deseas agregar a favoritos
//   // const item = shoes.find((shoe) => shoe.id === id);

//   // Enviar una solicitud POST a la API para agregar el elemento a "favorite"
//   delete(`${URL_API}/cart`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(id),
//   })
    
//     .then((data) => {
//       alert('Elemento elemento eliminado del carrito:', data);
//       // Realizar las acciones necesarias después de agregar el elemento a favoritos
//     })
//     .catch((error) => {
//       console.error('Error al eliminar el elemento del carrito:', error);
//     });
//   }

// const handleDelete = async (id) => {
//   console.log('hice click', id);
//   const response = await fetch(`${URL_API}/${id}`,
//   {
//     method: 'DELETE',
//   });
//   if (response.status === 200) {
//     alert('Producto eliminado exitosamente')
//   } else {
//     alert('Ooops, hubo un error al eliminar el producto');
//   }
//   getCart();
// }
// const getElementCart = () => {
// const getElementsTable = document.querySelectorAll('.delete');
// console.log(deleteElements);
// deleteElements.forEach(element => {
//   const id = element.getAttribute('data-id');
//   element.addEventListener('click', () =>{
//     console.log('hola');
//     handleDelete(id);
//   });
// });
// }
// getElementCart();
// const handleDelete = async (id) => {
//   console.log('hice click', id);
//   const response = await fetch(`${URL_API}/${id}`, {
//     method: 'DELETE',
//   });
//   if (response.status === 200) {
//     alert('Producto eliminado exitosamente');
//   } else {
//     alert('Ooops, hubo un error al eliminar el producto');
//   }
//   getCart();
// };

// const getElementCart = () => {
//   const deleteElements = document.querySelectorAll('.delete');
//   console.log(deleteElements);
//   deleteElements.forEach(element => {
//     const id = element.getAttribute('data-id');
//     element.addEventListener('click', () => {
//       console.log('hola');
//       handleDelete(id);
//     });
//   });
// };

