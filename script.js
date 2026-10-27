
const cartValue = document.querySelector("#cart-cont");

const btnBuys = document.querySelectorAll(".button-beli");
const qtyValues = document.querySelectorAll(".qty-value");
const qtyPluses = document.querySelectorAll(".qty-plus");
const qtyMinuses = document.querySelectorAll(".qty-min");

qtyPluses.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let jumlahBarang = parseInt(qtyValues[i].value);
    jumlahBarang = jumlahBarang + 1;

    qtyValues[i].value = jumlahBarang;
  });
});
qtyMinuses.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let jumlahBarang = parseInt(qtyValues[i].value);
    jumlahBarang = jumlahBarang - 1;

    qtyValues[i].value = jumlahBarang;
  });
});
btnBuys.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let jumlahBeli = parseInt(cartValue.textContent);
    jumlahBeli = jumlahBeli + parseInt(qtyValues[i].value);

    cartValue.textContent = jumlahBeli;
  });
});