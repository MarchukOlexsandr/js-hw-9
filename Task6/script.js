// JavaScript код для обробки події підтвердження бронювання
document.getElementById("confirmButton").addEventListener("click", function () {
  // Отримайте вибрані значення зі списку та флажків та додайте їх до списку заброньованих квитків
  const direction = document.getElementById("direction").value;
  const date = document.getElementById("date").value;
  const checkedTickets = [
    ...document.querySelectorAll('input[name="ticket"]:checked'),
  ];
  const totalPrice = checkedTickets.reduce(
    (total, ticket) => total + parseInt(ticket.getAttribute("data-price")),
    0
  );

  const reservedTickets = document.getElementById("reservedTickets");
  const listItem = document.createElement("li");
  listItem.textContent = `Напрямок: ${direction}, Дата: ${date}, Квитки: ${checkedTickets
    .map((ticket) => ticket.value)
    .join(", ")}`;
  reservedTickets.appendChild(listItem);

  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = `Ціна за квиток: ${totalPrice} грн`;
});
