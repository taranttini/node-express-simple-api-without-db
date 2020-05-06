const express = require('express');
const router = express.Router();

const User = require('../domain/User')
const UserList = require('../domain/UserList')

const users = new UserList();
users.add(new User('Benjamin'));
users.add(new User('Nicole'));
users.add(new User('Tau'));

router.all('/', (req, res) => {
    res.status(200).json({ m: 'all', data: users.all() });
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ m: `get`, data: users.findById(id) });
})

router.post('/new', async (req, res) => {
    const {name} = req.body;
    try {
        const user = new User(name);
        const newUser = await users.add(user);
        res.status(200).send(newUser);
    }
    catch(e) {
        console.error(e.message)
        res.status(200).json({msg: e.message})
    }
})

module.exports = router