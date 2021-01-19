'use strict';

// Exercise A

const url = 'https://randomfox.ca/floof/';

async function getData() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.error(e);
    }
  }
  getData(url);


  //Exercise B

  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

  async function makeAllCaps(array) {
    try {
      const capsArray = await array.map(word => {
        if (typeof word === 'string') {
          return word.toUpperCase();
        }
      });
      console.log(capsArray);
    } catch (error) {
      console.log(`Error: Not all items in the array are strings! - ${error}`);
    }
  }
  makeAllCaps(arrayOfWords);