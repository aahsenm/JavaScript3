'use strict';

const img = document.createElement('img')
document.body.appendChild(img);

function imageHumorXhr() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);
  
    xhr.send();
  
    xhr.onload = function() {
      if (this.status != 200) {
        console.log(`There is an error!`);
      } 
    };
  
    xhr.onerror = function() {
      console.log('There is an error!');
      
      displayErrorMessage();
    };
  }
imageHumorXhr();
  
function imageHumorAxios (){
    axios.get('https://xkcd.now.sh/?comic=latest');
   
    axios.then( response => {
        console.log(response.data);
    
    })

    axios.catch(function(error) {
        console.log(`There is an ${error}`);
      });

}
imageHumorAxios();