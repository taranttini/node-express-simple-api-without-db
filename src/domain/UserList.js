class UserList {
    constructor() {
        this.userList = new Array();
    }

    async add(user) {
        if (typeof user !== 'object' || !user.constructor || user.constructor.name !== 'User')
            throw new Error('Dado inválido, não é um usuário.');
        
        const existUser = await this.findByName(user.getName())
        if (existUser != undefined)
            throw new Error('Usuário já cadastrado.');
        
        this.userList.push(user)

        return user;
    }

    findByName(name) {
        return this.userList.find(user => {
            if (user.getName() == name) {
                return user;
            }
        })
    }

    findById(id) {
        return this.userList.find(user => {
            if (user.getId() == id) {
                return user;
            }
        })
    }

    all() {
        return this.userList;
    }
}

module.exports = UserList;