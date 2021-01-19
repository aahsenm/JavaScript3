"use strict";

const checkDoubleDigits = number => {
    return new Promise((resolve, reject) => {
      if (number > 10) {
        resolve('The number is bigger than 10!');
      }
      if (number < 10) {
        reject('Error! The number is smaller than 10...');
      }
    });
  };

  checkDoubleDigits(2)
  .then(message => {
    console.log(message);
  })
  .catch(message => {
    console.log(message);
  });
  