'use strict';

function imageXhr(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

    xhr.send();

    
    xhr.onload = function() {
        if (xhr.status != 200) {
        console.log(`There is an error`);
        } 
    };


    xhr.onerror = function() {
        console.log('There is an error!');

        displayErrorMessage();
        
    };
}
imageXhr();

function imageAxios(){

    axios.get('https://dog.ceo/api/breeds/image/random')
    axios.then(function(response) {
        console.log(response.data.message);
    }
    axios.catch(function(error) {
        console.log('There is an${error}`)
    });
}
imageAxios();