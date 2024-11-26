import { Mammal } from './Mammal.js'

export class Dog extends Mammal {
	constructor(name, owner, age, food) {
		super(name)
		this.owner = owner
		this.age = age
		this.food = food
	}

	eats() {
		return `${this.owner}'s dog who's name is ${this.name} eats ${this.food}!`
	}

	isPuppy() {
		if (this.age < 7) {
			return true
		}
		return false
	}

    info() {
        return `Owner: ${this.owner}, Dog's name: ${this.name}, isPuppy: ${this.isPuppy()}`
    }
}

const dog = new Dog('Misha', 'Arina', 8, 'PASHTET')
// console.log(dog)
// console.log(dog.eats())
// console.log(dog.isPuppy())
// console.log(dog.info())
