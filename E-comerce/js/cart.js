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

getShoes(URL_API);


document.addEventListener ("click", (e)=> {
  if (e.target.classList.contains("delete")){
    console.log('hice click');  
  const id = e.target.getAttribute("data-id");
  handleDelete(id);
}
});

const handleDelete = async (id) =>{
  console.log('hice click', id);
  const response = await fetch(`${URL_API}/${id}`,{
    method: 'DELETE',
  });
  if (response.status === 200) {
    alert('Producto eliminado exitosamente');
  } else {
    alert('Opss hubo un problema al eliminar el producto');
  }
  getCart();
};

//-------

const form = document.querySelector('form');
const subtotalInput = document.querySelector('.form_div6 input');
const couponDiscountInput = document.querySelector('.form_div7 input');
const shippingInput = document.querySelector('.form_div8 input');
const totalInput = document.querySelector('.form_div9 input');

fetch(URL_API)
.then(response => response.json())
.then(data => {
  var cart = data.cart;

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    subtotal += item.precio;
  }
  subtotalInput.value = subtotal;

  const applyButton = form.querySelector('.form_div5');
  applyButton.addEventListener('click', function() {
  const couponValue = parseFloat(document.querySelector('.form_div4').value);

  const couponDiscount = subtotal * (couponValue / 100);
  couponDiscountInput.value = couponDiscount;

  const shippingCost = parseFloat(shippingInput.value);
  const total = subtotal - couponDiscount + shippingCost;
  totalInput.value = total;
});
})