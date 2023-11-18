const characterList = document.getElementById("character-list");
const pagePrev = document.getElementById("prev-page")
const pageNext = document.getElementById("next-page")
let paginaActual = 1;

function getRickAndMorty(page){
    characterList.innerHTML = " "
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => {
        if(!response.ok) {
          throw new Error ("La solicitud no fue exitosa")
        } return response.json()
    })
    .then((data) => {
        const characters = data.results
        characters.forEach(character => {
          listItem =`
          <li>
            <img src="${character.image}" alt="${character.name}" >
            <p><span>Nombre: </span>${character.name}</p>
            <p><span>Especie: </span>${character.species}</p>
          </li>`
          characterList.innerHTML += listItem  
        });
    })
}

pageNext.addEventListener("click", function (){
    paginaActual ++
    getRickAndMorty(paginaActual)
})

pagePrev.addEventListener("click", function (){
    paginaActual --
    getRickAndMorty(paginaActual)
})

getRickAndMorty(paginaActual)