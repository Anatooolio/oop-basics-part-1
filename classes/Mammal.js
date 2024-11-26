export class Mammal {
	constructor(name) {
		this.name = name
	}

	eats() {
		return `${this.name} eats food`
	}
}

const mammal = new Mammal('Bear')

// console.log(mammal.eats())
