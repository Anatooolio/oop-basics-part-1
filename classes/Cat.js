import { Mammal } from './Mammal.js'

export class Cat extends Mammal {
	constructor(name, breed) {
		super(name)
		this.breed = breed
	}

	showInfo() {
		return `Порода: ${this.breed}. Имя: ${this.name}`
	}
}

const cat = new Cat('Мося', 'Сфинкс')
// console.log(cat.showInfo())
