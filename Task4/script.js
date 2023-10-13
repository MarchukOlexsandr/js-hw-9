const orderForm = document.getElementById("order-form");
const orderOutput = document.getElementById("order-output");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const book = document.getElementById("book").value;
  const quantity = document.getElementById("quantity").value;
  const name = document.getElementById("name").value;
  const deliveryDate = document.getElementById("delivery-date").value;
  const address = document.getElementById("address").value;
  const comment = document.getElementById("comment").value;

  const message = `${name}, дякуємо за замовлення. ${quantity} товар буде доставлений у ${deliveryDate} за адресою: ${address}.`;

  orderOutput.innerHTML = `<div>${message}</div>`;
});
