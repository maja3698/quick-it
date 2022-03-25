const url = "https://quickit-ba88.restdb.io/rest/smallarticles";
const options = {
  headers: {
    "x-apikey": "61bb1e0c98cf0d3f741b900f",
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
    handleData(data);
  });

function handleData(smallarticles) {
  smallarticles.forEach((smallarticle, index) => {
      const template = document.querySelector(".template-left").content;
      const clone = template.cloneNode(true);
      clone.querySelector(".righth1-left").textContent = smallarticle.header;
      clone.querySelector(".rightp-left").textContent =
        smallarticle.description;
      clone.querySelector(".custom-img").src = smallarticle.img_url;
      const mainEl = document.querySelector(".info-template-left");
      mainEl.appendChild(clone);
    }
  )}

var menu = document.getElementById("menu");
var nav = document.getElementById("navigation");
var exit = document.getElementById("exit");

menu.addEventListener("click", function (e) {
  nav.classList.add("nav-transition");
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
  e.preventDefault();
});

nav.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
});

function openNav() {
  document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}

const scrollBtn = document.querySelector(".scrollbutton");

const refreshButton = () => {
  if(document.documentElement.scrollTop <= 150) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block"
  };
}



scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  //above is for Safari
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) =>{
  refreshButton();
})