
const API_KEY = '563492ad6f917000010000012c1af287c4ad4bd6b5ac417c55027dd1';

let query = '' || 'runnign';

const pharams = {
  method: 'GET',
  withCredentials: true,
  headers: {
    "authorization": `${API_KEY}`,
    "Content-Type": "application/json"
  }
}


const container = document.querySelector('.container')

const searchCat = () => {
  if (document.querySelector('.cats_container')){
    let img = document.querySelector('.cats_container')
    img.remove()
  }

  const searchtxt = document.querySelector('#searchtxt')
  let query = searchtxt.value.replaceAll(" ", "+")
  let URL = `https://api.pexels.com/v1/search/?query=cats+${query}&orientation=landscape`
  fetch(URL, pharams)
  .then(response => response.json())
  .then( (data) => {
    let cats = data.photos;

    const catcontainer = document.createElement('div')
    container.appendChild(catcontainer)
    catcontainer.setAttribute("class", "cats_container")

    cats.map((cat) => {
      const img = document.createElement('img')
      catcontainer.appendChild(img)
      img.setAttribute("class", "cat_img")
      img.src = cat.src.medium
    })
  })
}
