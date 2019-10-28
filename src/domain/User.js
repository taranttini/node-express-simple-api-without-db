const Guid  = require('./Guid')

class User {
    constructor(name) {
        this.id = new Guid().ID();
        this.setName(name);
    }

    setName(value) {
        if(value == null || value == undefined || value.length < 2)
            throw new Error('Informar ao menos 2 caracteres.');

        this.name = value;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    toString() {
        return `id: ${id}, name: ${name}`;
    }
}

module.exports = User;