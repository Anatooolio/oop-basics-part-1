export class Mammal {
	constructor(name = null) {
		this.name = name
	}

	eats() {
		console.log(`${this.name} eats food`)
	}
}

const mammal = new Mammal('Beer')
// console.log(mammal)
mammal.eats()
