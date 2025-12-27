


const accessKey = '9Xs8n83UdnkGM6oupPoWMfpKYZqpAS6vJAuOfwCfGOo'; 
let count = 10;

let ApiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;

console.log(ApiUrl);

let fethcing = false;

async function getPhotos() {
  fethcing = true;
  let response = await fetch(ApiUrl);
  let data = await response.json();
  console.log(data);

  let gallery = document.querySelector(".gallery");
  data.forEach((photo) => {
    let img = document.createElement("img");
    img.src = photo.urls.regular;
    img.style.height = "200px";
    img.style.width = "200px";
    gallery.appendChild(img);
  });
  fethcing = false;
}

getPhotos();

window.addEventListener("scroll", function () {
    console.log( window.scrollY ,window.innerHeight, document.body.offsetHeight);
    let b = 100;
  if (
    !fethcing &&
    window.scrollY + window.innerHeight+100 >= document.body.offsetHeight
  ) {
    getPhotos();
  }
});
