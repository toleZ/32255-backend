const socket = io();

const createProductForm = document.querySelector("#createProductForm");
const productsList = document.querySelector("#productsList");
const productInput = document.querySelector("#product");

const addProd = (prod) => {
  const item = document.createElement("li");
  item.innerHTML = prod;

  productsList.appendChild(item);
};

createProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("newProduct", productInput.value);
});

socket.on("newProductAdded", (prod) => addProd(prod));
