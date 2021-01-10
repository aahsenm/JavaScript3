'use strict';
//To fix my errors, I talked one of my friend. She helped me to fix the errors.

//created image for xhr and axios

function createImage () {
  const imgElement = document.createElement("img");
  document.body.appendChild(imgElement);

}

//created error message for xhr and axios

function errorMessageFunction (){
  const errorMessage = document.createElement("h1");
  errorMessage.innerText = "There is an error!";
  document.body.appendChild(errorMessage);
};

function imageHumorXhr() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);
  
    xhr.send();
  
    xhr.onload = function() {
      if (this.status != 200) {
        console.log(`There is an error!`);
      } else {
        console.log(xhr.responseText);
        let x = JSON.parse(xhr.responseText);
        let y = x.img;

        createImage(x);
      }
    };
  
    xhr.onerror = function() {
      console.log('OOPPS!');
      
      errorMessageFunction();
    };
  }
imageHumorXhr();

// For Axios, I also fixed the errors.


function imageHumorAxios (){
    axios
    .get('https://xkcd.now.sh/?comic=latest')
    .then( function (response){
        console.log(response.data);
        let a = response.data;
        let b = a.img;
        
        createImage(b);
    })

    .catch(function(error) {
        console.log("OOPSS!");

        errorMessageFunction();
      });

}
imageHumorAxios();