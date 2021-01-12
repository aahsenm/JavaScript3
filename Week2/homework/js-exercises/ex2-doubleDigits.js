"use strict";

const checkDoubleDigits = number => {
    const createPromise = new Promise((resolve, reject) => {
      if (number > 10) {
        resolve('The number is bigger than 10!');
      }
      if (number < 10) {
        reject('Error! The number is smaller than 10...');
      }
    });

    createPromise
      .then(message => {
        console.log(message);
      })
  };
  
  checkDoubleDigits(2);
  checkDoubleDigits(13);
  