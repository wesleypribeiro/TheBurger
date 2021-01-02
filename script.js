let foodBtn = document.querySelector('#food');
let drinkBtn = document.querySelector('#drink');
let dessertBtn = document.querySelector('#dessert');
let itemList = document.querySelector('#itemList');
let cart = document.querySelector('#cart');
let finishBtn = document.querySelector('#finish');
let totalText = document.querySelector('#total');
let totalValue = document.querySelector('#totalValue');
let order = document.querySelector('#order');
let removeAllBtn = document.querySelector('#removeAll');
let total = 0;

removeAllBtn.addEventListener('click', newOrderFunction);

finishBtn.addEventListener('click', () => {
  cart.style.textAlign = 'center';
  cart.innerHTML = `
  <h1>Seu pedido foi enviado para cozinha!</h1>
  <p>Em breve estará pronto</p>
  <button id='newOrder'>Novo pedido</button>
  `;
  let newOrder = document.querySelector('#newOrder');
  newOrder.addEventListener('click', newOrderFunction);
  totalText.style.display = 'none';
  order.style.display = 'none';
});

function newOrderFunction() {
  food.forEach(item => {
    item.quantidade = 0;
  })

  drink.forEach(item => {
    item.quantidade = 0;
  })

  dessert.forEach(item => {
    item.quantidade = 0;
  })

  totalText.style.display = 'none';
  order.style.display = 'none';
  cart.style.textAlign = 'center';
  cart.innerHTML = `
  <h1>CARRINHO DE COMPRAS</h1>
  <p>Adicione itens para começar</p>
  `;

  total = 0;
}

foodBtn.addEventListener('click', () => {
  itemList.innerHTML = '';
  foodBtn.className = 'on';
  drinkBtn.className = '';
  dessertBtn.className = '';

  food.map(item => {
    let itemMenu = document.createElement('li');
    itemMenu.id = item.name;
    itemMenu.className = 'list-item';

    let itemImg = document.createElement('img');
    itemImg.src = item.img;

    let itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.innerText = item.name;

    let itemDescription = document.createElement('p');
    itemDescription.innerText = item.description;

    let itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.innerText = `R$${item.preco}`;

    let addBtn = document.createElement('button');
    addBtn.className = 'add';
    addBtn.innerText = 'Adicionar ao carrinho';

    itemMenu.appendChild(itemImg);
    itemMenu.appendChild(itemName);
    itemMenu.appendChild(itemDescription);
    itemMenu.appendChild(itemPrice);
    itemMenu.appendChild(addBtn);
    itemList.appendChild(itemMenu);
  });

  let buttons = document.getElementsByClassName('add');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      food[i].quantidade++;
      total += food[i].preco;
      refreshCart();
    })
  }
})

drinkBtn.addEventListener('click', () => {
  itemList.innerHTML = '';
  drinkBtn.className = 'on';
  foodBtn.className = '';
  dessertBtn.className = '';

  drink.map(item => {
    let itemMenu = document.createElement('li');
    itemMenu.id = item.name;
    itemMenu.className = 'list-item';

    let itemImg = document.createElement('img');
    itemImg.src = item.img;

    let itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.innerText = item.name;

    let itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.innerText = `R$${item.preco}`;

    let addBtn = document.createElement('button');
    addBtn.className = 'add';
    addBtn.innerText = 'Adicionar ao carrinho';

    itemMenu.appendChild(itemImg);
    itemMenu.appendChild(itemName);
    itemMenu.appendChild(itemPrice);
    itemMenu.appendChild(addBtn);
    itemList.appendChild(itemMenu);
  });

  let buttons = document.getElementsByClassName('add');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      drink[i].quantidade++;
      total += drink[i].preco;
      refreshCart();
    })
  }
})

dessertBtn.addEventListener('click', () => {
  itemList.innerHTML = '';
  dessertBtn.className = 'on'
  drinkBtn.className = '';
  foodBtn.className = '';

  dessert.map(item => {
    let itemMenu = document.createElement('li');
    itemMenu.id = item.name;
    itemMenu.className = 'list-item';

    let itemImg = document.createElement('img');
    itemImg.src = item.img;

    let itemName = document.createElement('p');
    itemName.className = 'item-name';
    itemName.innerText = item.name;

    let itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.innerText = `R$${item.preco}`;

    let addBtn = document.createElement('button');
    addBtn.className = 'add';
    addBtn.innerText = 'Adicionar ao carrinho';

    itemMenu.appendChild(itemImg);
    itemMenu.appendChild(itemName);
    itemMenu.appendChild(itemPrice);
    itemMenu.appendChild(addBtn);
    itemList.appendChild(itemMenu);
  });

  let buttons = document.getElementsByClassName('add');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      dessert[i].quantidade++;
      total += dessert[i].preco;
      refreshCart();
    })
  }
})

function refreshCart() {
  document.querySelector('footer').style.textAlign = 'left';
  cart.style.textAlign = 'left';
  cart.innerHTML = '';
  food.map(item => {
    if (item.quantidade > 0) {
      totalText.style.display = 'block';
      totalText.style.textAlign = 'right';
      order.style.display = 'flex';
      order.className = 'position';
      totalValue.innerText = `${total}`;
      cart.innerHTML += `
      <p><strong>${item.name}</strong></p>
      <p>Quantidade: ${item.quantidade}</p>
      <hr>
      </br>
      `;
    }
  })

  drink.map(item => {
    if (item.quantidade > 0) {
      totalText.style.display = 'block';
      totalText.style.textAlign = 'right';
      order.style.display = 'flex';
      order.className = 'position';
      totalValue.innerText = `${total}`;
      cart.innerHTML += `
      <p><strong>${item.name}</strong></p>
      <p>Quantidade: ${item.quantidade}</p>
      <hr>
      </br>
      `;
    }
  })

  dessert.map(item => {
    if (item.quantidade > 0) {
      totalText.style.display = 'block';
      totalText.style.textAlign = 'right';
      order.style.display = 'flex';
      order.className = 'position';
      totalValue.innerText = `${total}`;
      cart.innerHTML += `
      <p><strong>${item.name}</strong></p>
      <p>Quantidade: ${item.quantidade}</p>
      <hr>
      </br>
      `;
    }
  })
}

const food = [
  { name: 'Classic', preco: 30, img: 'img/classic.jpg', description: 'Pão, Hamburguer 120g, queijo prato e picles', quantidade: 0 },
  { name: 'Double', preco: 45, img: 'img/double.png', description: 'Pão, Hamburguer 120g, queijo prato e picles', quantidade: 0 },
  { name: 'Salad', preco: 35, img: 'img/salad.png', description: 'Pão, Hamburguer 120g, queijo prato e picles', quantidade: 0 },
]

const drink = [
  { name: 'Coca-cola', preco: 10, img: 'img/coke.jpg', quantidade: 0 },
  { name: 'Suco', preco: 5, img: 'img/juice.jpg', quantidade: 0 },
  { name: 'Agua', preco: 5, img: 'img/water.jpg', quantidade: 0 },
]

const dessert = [
  { name: 'Brownie', preco: 10, img: 'img/brownie.png', quantidade: 0 },
  { name: 'Sundae', preco: 5, img: 'img/sundae.png', quantidade: 0 },
  { name: 'Casquinha', preco: 5, img: 'img/icecream.jpg', quantidade: 0 },
]
