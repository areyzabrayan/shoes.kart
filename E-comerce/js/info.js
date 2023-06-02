// const containerCard = document.getElementById("containerCard");

// const mostrarTarjetaSeleccionada = () => {
//   const params = new URLSearchParams(window.location.search);
//   const index = params.get('index');

//   if (index !== null) {
//     // Obtener la tarjeta correspondiente al índice
//     const tarjetaSeleccionada = hombre[index];

//     // Mostrar la tarjeta seleccionada en el contenedor
//     containerCard.innerHTML = `
//     <article class="card">
//     <figure class="card__figure">
//     <img src=${element.imagen} alt=${element.nombre}>
//     <div class="card__infoImage">
//     <div class="info">
//     <span class="material-symbols-outlined" class="info">
//     info
//     </span>
//     </div>
//     <div  class="favorite">
//     <span class="material-symbols-outlined">
//                 favorite
//                 </span>
//                 </div>
//                 <div  class="cart">
//                 <span class="material-symbols-outlined">
//                 shopping_cart
//                 </span>
//                 </div>
//     </div>
// </figure>
// <section class="card__body">
// <h3 class="card__name">${element.nombre}</h3>
// <h4 class="card__marca">${element.marca}</h4>
// <span class="card__price">$${Number(element.precio)}</span>
// <br>
// <span class="card__stock">${Number(element.stock)}</span>  
// </section>
// <section class="card__button">
//             <button class="card__btn">Add</button>
// </section>
// </article>`;
//   }
// };

// mostrarTarjetaSeleccionada();

const URL_API = "http://localhost:3000/";

const mostrarTarjetaSeleccionada = (shoe) => {
	let containerCard = document.querySelector("#containerCards");
	let containsHTML = ""

	containsHTML += `
				<article class="card">
				<figure class="card__figure">
				<img src=${shoe.imagen} alt=${shoe.nombre}>
				<div class="card__infoImage">
				<div class="info">
				<span class="material-symbols-outlined" class="info">
				info
				</span>
				</div>
				<div  class="favorite">
				<span class="material-symbols-outlined btnLike">
							favorite
							</span>
							</div>
							<div  class="cart">
							<span class="material-symbols-outlined'>
							shopping_cart
							</span>
							</div>
				</div>
			</figure>
			<section class="card__body">
			<h3 class="card__name">${shoe.nombre}</h3>
			<h4 class="card__marca">${shoe.marca}</h4>
			<span class="card__price">$${Number(shoe.precio)}</span>
			<br>
			<span class="card__stock">${Number(shoe.stock)}</span>  
			</section>
			<section class="card__button">
						<button class="card__btn">Add</button>
			</section>
			</article>`;

	// Obtener la tarjeta correspondiente al índice
	// const tarjetaSeleccionada = hombre[index];

	// Mostrar la tarjeta seleccionada en el contenedor
	containerCard.innerHTML = containsHTML;
};

const getShoe = async (id) => {
	try {
		const endpoint = "shoes";
		const resp = await fetch(`${URL_API}${endpoint}/${id}`);
		const response = await resp.json();
		return response;
	} catch (error) {
		console.log(error);
		return {};
	}
};

document.addEventListener("DOMContentLoaded", async () => {
	const params = new URLSearchParams(window.location.search);
	const index = params.get('id');
	if (index == "" || index == 0 || index == undefined || index == null ) {
		alert("Ha ocurrido un error, vuelva a dar click en la información del item que desea ver.")
		window.location.href = "../index.html"
	}
	try {
		const shoe = await getShoe(index);
		if (shoe.id == undefined || shoe.id == null) {
			alert("No existe el item que desea ver...")
			window.location.href = "../index.html"
		} else {
			mostrarTarjetaSeleccionada(shoe);
		}
	} catch (e) {
		console.log(e)
	}
});