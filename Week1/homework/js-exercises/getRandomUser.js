'use strict';
 
//To fix my errors, I talked one of my friend. She helped me to fix the errors.

// written a function to make a HTTP Request with XHR
function newFriendWithXhr () {
    
    //created a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    //given an endpoint
    xhr.open('GET', 'https://www.randomuser.me/api', true);
    
    //given a request to the network
    xhr.send();

    //to log the received data to the console, written a function with an if statement
    xhr.onload = function() {
        if(xhr.status != 200){
            console.log(xhr.responseText);
        } else {
            console.log(xhr.reponseText);
        }

        document.getElementById('XHR').innerHTML = this.responseText;
    }
    //to log to the console the error message
    xhr.onerror = function() {
        console.log('There is an error!');
      };
}
newFriendWithXhr ();

//written a function to make a HTTP Request with Axios
function newFriendWithAxios () {

    //used get request and then
    axios
        .get('https://www.randomuser.me/api')
        .then( function(response) {
        console.log(response);
        document.getElementById('Axios').innerHTML = JSON.stringify(response);
    })

        //for error used catch function
        .catch(function(error) {
        console.log(`There is an ${error}`);
      });
}
newFriendWithAxios();