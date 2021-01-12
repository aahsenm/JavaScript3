"use strict";

const getAnonName = firstName => {
    const createPromise = new Promise((resolve, reject) => {
        if (firstName) {
          const fullName = `${firstName} Doe`;
          resolve(`${fullName}`);
        }
        if (!firstName) {
          reject(new Error("You didn't pass in a first name!"));
        }
      });

      setTimeout(() => {
        createPromise
          .then(message => {
            console.log(message);
          })
      }, 2000);
};



getAnonName("John");