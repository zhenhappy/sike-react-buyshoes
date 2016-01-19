window.onload = function() {
  console.log("page loaded");
  makeCartScrollNicely();
}

function makeCartScrollNicely() {
  var cart = document.querySelector('.cart__content');
  Ps.initialize(cart);
}
