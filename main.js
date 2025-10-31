const API_URL =
  "https://68fa6a99ef8b2e621e7feb11.mockapi.io/kamronbek/asaxiy-products";
const cards = document.querySelector(".cards-grid");

const getData = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderCards(data);
  } catch (error) {
    console.error("Ma'lumotlarni olishda xatolik:", error);
  }
};

function renderCards(data) {
  cards.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
      <h6 class="mt-2">${item.title}</h6>
      <p class="text-danger fw-bold">${item.price.toLocaleString()} so'm</p>
      <p><span>${item.rate}</span> <i class="fa-regular fa-star"></i></p>
    `;
    cards.appendChild(card);
  });
}

getData();
