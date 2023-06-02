// const URL_API = "http://localhost:3000/favorite";

// const shoesData = async (url) => {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// const getShoes = async (url) => {
//   try {
//     const shoeData = await shoesData(url);
//     const cartContainer = document.getElementById('containerCards');
//     printCards(shoeData, cartContainer);
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

// const printCards = (favorite, container) => {
//   container.innerHTML = "";
//   cart.forEach((element) => {
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
//           </div>
//           <div class="deletCard">
//             <span class="material-symbols-outlined delet">
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
//       </article>`;
//   });
// };

// getShoes(URL_API);

// document.addEventListener('DOMContentLoaded', () => {
//     showFavoritesCards()
//     addLikeButton()
// })

// const addLikeButton = () => {
// 	const likes = document.querySelectorAll('.btnLike');
// 	likes.forEach((icon) => {
// 		icon.addEventListener('click', function () {
// 			let id = icon.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
//             removeFromFavorites(id)
// 		});
// 	});
// }
// const removeFromFavorites = (id) => {
//     let data = getFavorites();
//     let isFavorite = data.find(item => item.id == id);
//     if (isFavorite != null) {
//         let newFavorites = data.filter(item => item.id != id)
//         localStorage.setItem("favorites", JSON.stringify(newFavorites))
//         location.reload();
//     } else {
//         alert("Este no es un articulo favorito")
//     }
// }

const getFavorites = () => {
  let storage = localStorage.getItem("favorites")
  if (storage == "" || storage == null || storage == undefined) {
      return []
  }
  return JSON.parse(storage)
}

const showFavoritesCards = () => {
  let containerInfo = document.querySelector("#containerCards");
  let contentHTML = ""
  const favorites = getFavorites()
  if (favorites.length > 0) {
      favorites.forEach((element) => {
          contentHTML += `<article class="card" id=${element.id}>
              <figure class="card__figure">
              <img src=${element.imagen} alt=${element.nombre}>
              <div class="card__infoImage">
              <div class="info">
              <span class="material-symbols-outlined" class="info">
              info
              </span>
              </div>
              <div class="favorite">
              <span class="material-symbols-outlined btnLike">
                          favorite
                          </span>
                          </div>
                          <div  class="cart">
                          <span class="material-symbols-outlined">
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
          </article>`
      })
  } else {
      contentHTML = "<p>No has seleccionado ningún item como favorito. Marca un item como favorito para que aparezca aquí.</p>"
  }
  console.log(contentHTML)
  containerInfo.innerHTML = contentHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  showFavoritesCards();
  addLikeButton();
})

const addLikeButton = () => {
const likes = document.querySelector('.btnLike');

likes.forEach((icon) => {
  icon.addEventListener('click', function () {
    let id = icon.parentNode.parentNode.parentNode.parentNode.getAttribute("id");
          removeFromFavorites(id)
    //window.location.href = `./pages/info.html?index=${index}`;
    //alert("Le dimos like a este objeto ", index)
  });
});
}

const removeFromFavorites = (id) => {
  let data = getFavorites();
  let isFavorite = data.find(item => item.id == id);
  if (isFavorite != null) {
      let newFavorites = data.filter(item => item.id != id)
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      location.reload();
  } else {
      alert("Este no es un articulo favorito")
  }
}