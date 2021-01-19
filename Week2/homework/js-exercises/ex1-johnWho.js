"use strict";

const getAnonName = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      } else {
        resolve(`${firstName} Doe`);
      }
    }, 2000);
  });
};

getAnonName('John')
  .then((message) => console.log(message))
  .catch((err) => console.log(err));