
const API_KEY = '563492ad6f917000010000012c1af287c4ad4bd6b5ac417c55027dd1';

/* let URL_BASE = `https://api.pexels.com/v1/search/?query=${query}&orientation=landscape`; */
let query = '';



const pharams = {
  method: 'GET',
  withCredentials: true,
  headers: {
    "authorization": `${API_KEY}`,
    "Content-Type": "application/json"
  }
}


const catsContainer = document.querySelector('.cats_container')

const searchCat = () => {
  if (document.querySelector('.img_container')){
    let img_container = document.querySelector('.img_container')
    img_container.remove()
  }


  const searchtxt = document.querySelector('#searchtxt')
  let query = searchtxt.value.replaceAll(" ", "+")
  let URL = `https://api.pexels.com/v1/search/?query=${query}&orientation=landscape`
  fetch(URL, pharams)
  .then(response => response.json())
  .then( (data) => {
    let cats = data.photos;

    cats.map((cat) => {
      const img = document.createElement('img')
      catsContainer.appendChild(img)
      img.setAttribute("class", "img_container")
      img.src = cat.src.medium
    })
  })
}
