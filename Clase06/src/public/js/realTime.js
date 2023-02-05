const socket = io();

const createProductForm = document.querySelector("#createProductForm");

createProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const productInput = document.querySelector("#product");

  socket.emit("newProduct", productInput.value);

  const productsList = document.querySelector("#productsList");

  const item = document.createElement("li");
  item.innerHTML = productInput.value;

  productsList.appendChild(item);
});
