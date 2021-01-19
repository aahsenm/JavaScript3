"use strict";

function main() {
    const divOfButton = document.createElement("div");
    const button = document.createElement("button");
    const chooseAPokemon = document.createElement("select");
    const divOfImage = document.createElement("div");
    const image = document.createElement("img");
    button.innerText = "Get Pokemon!";
    divOfButton.style.marginLeft = "100px";
    button.style.padding = "10px";
    divOfButton.style.borderRadius = "20px";
    chooseAPokemon.style.marginTop = "20px";
    chooseAPokemon.style.marginLeft = "100px";
    divOfImage.style.marginLeft= "100px";
    button.addEventListener("click", () => {
        fetchData();
    });

    function fetchData (){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then( (data) => {
            const dataOfPokemon = data.results.map((pokemon) => pokemon.name);
            addPokemonToDom(dataOfPokemon);
        });
    }

    function addPokemonToDom (name){
        name.forEach((pokemon,index) => {
            let typesOfPokemons = document.createElement("option");
            typesOfPokemons.value = index + 1;
            typesOfPokemons.innerText = pokemon;
            chooseAPokemon.appendChild(typesOfPokemons);
        })
    }

    chooseAPokemon.addEventListener("change", (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151/${e.target.value}")
        .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            image.src = data.sprites.front_default;
          });
          
    })

    divOfButton.appendChild(button);
    divOfImage.appendChild(image);
    document.body.appendChild(divOfButton);
    document.body.appendChild(chooseAPokemon);
    document.body.appendChild(divOfImage);
    
}

main ();