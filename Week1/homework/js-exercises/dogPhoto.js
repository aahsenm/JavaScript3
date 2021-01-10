'use strict';

//To fix my errors, I talked one of my friend. She helped me to fix the errors.

//created image and li elements, after used appendChild.

function createImage () {
    const imgElement = document.createElement("img");
    const liElement = document.createElement("li");
    const divElement = document.getElementById("container");
    const ulElement = document.getElementById("unordered-list");
    divElement.appendChild(ulElement);
    ulElement.appendChild(liElement);
    liElement.appendChild(imgElement);
  }
  
  //created error message for xhr and axios
  
  function errorMessageFunction (){
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "There is an error!";
    document.body.appendChild(errorMessage);
  };

function imageXhr(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

    xhr.send();

    
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log("There is an error");
        } else {
            console.log(xhr.responseText);
            let x = JSON.parse(xhr.responseText);
            let y = x.message;

            createImage(y);
        }
    }

    xhr.onerror = function() {
        console.log("OOPSS!");

        errorMessageFunction();
        
    };
}
imageXhr();

function imageAxios(){

    axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        console.log(response.data.message);
        let x = response.data.message;

        createImage(x);
    })

    .catch ( function (error) {
        console.log("There is an ${error}")

        errorMessageFunction();
    })
}

imageAxios();