class Auto {
	constructor(model) {
		this.model = model;
	}
}

class AutoFactory {
	constructor() {
		this.models = {};
	}

	create(modelName) {
		let model = this.models[modelName];
		if (model) return model;
		this.models[model] = new Auto(model);
		return this.models[model];
	}

	getModels() {
		return this.models;
	}
}

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audy = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());


