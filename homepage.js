const url = "https://quickit-e277.restdb.io/rest/homepage-card";

const options = {
  headers: {
    "x-apikey": "61b8a82386e3467b41d8e06d",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //console.log(data);
    handleData(data);
  });

function handleData(homeCard) {
  homeCard.forEach((card) => {
    console.log(card);
    const template = document.querySelector("#homepage-template").content;
    const clone = template.cloneNode(true);
    clone.querySelector(".card-title").textContent = card.title;
    clone.querySelector(".card-text").textContent = card.text;
    clone.querySelector(".card-img").src = card.img_url;
    const mainEl = document.querySelector("#homepage-cards");
    mainEl.appendChild(clone);
  });
}
