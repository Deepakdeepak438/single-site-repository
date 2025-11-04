let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}
