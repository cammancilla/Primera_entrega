let allContainerCart = document.querySelector('.products');
let cointanerBuyCart = document.querySelector('row row-cols-1 row-cols-md-2 g-4')

let buyThings = []

function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-add-cart')){
    const selectProduct = e.target.parentElement;
    readTheContent(selectProduct);
    
    }
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        tittle: product.querySelector('div .card-tittle').textContent,
        price: product.querySelector('div .precio').textContent,
        id: product.querySelector('button').getAttribute('data-id'),
        amount: 1
    } 
    buyThings = [...buyThings, infoProduct]
    loadHtml();
    console.log(infoProduct);
}

function loadHtml(){
    buyThings.forEach(product => {
        const {image, tittle, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('card');
        row.innerHTML = `
        <img src="${image}" class="rounded mx-auto d-block" alt="cargando..." height="" width="">
        <div class="card-body">
          <h5 class="card-title">${tittle}</h5>
          <p class="precio">${price}</p>
          <button type="button" class="btn-add-cart" data-id="3">Añadir al carrito</button>
          <h6> Amount: ${amount}</h6>
          <span class="delete-product" data-id="${id}">X</span>
        </div>

        `;

        cointanerBuyCart.appendChild(row);
    });
}

