'use strict';

class owner {
    constructor(name, age, city, family, job, interests) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.family = family;
      this.job = job;
      this.interests = interests;
    }
  }
  
  class horse {
    constructor(name, age, color, activities) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.activities = activities;
    }
  }

  let ownerAbdulkareem = new owner(
    'Adbulkareem',
    35,
    'Riyadh',
    ['1 wife', '3 children'],
    'construction worker',
    ['eat dates', 'smoke water pipe'],
  );
  
  console.log(ownerAbdulkareem);
  
  const horseAdel = new horse('Adel', 15, 'brown', [
    'eats grass',
    'transports construction materials for Abdulkareem',
  ]);
  
  console.log(horseAdel);
  