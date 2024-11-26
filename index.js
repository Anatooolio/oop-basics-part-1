import { Cat } from './classes/Cat.js'
import { Dog } from './classes/Dog.js'

// cat1, cat2 ...
const cat1 = new Cat('Lui', 'Pupik')
console.log(cat1)
console.log(cat1.showInfo())

// dog1, dog2 ...
const dog1 = new Dog('Luck', 'Tolya', 3, 'meat')
console.log(dog1)
console.log(dog1.info())
