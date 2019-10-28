const express = require('express');
const router = express.Router();

const User = require('../domain/User')
const UserList = require('../domain/UserList')

const users = new UserList();
users.add(new User('Benjamin'));
users.add(new User('Nicole'));
users.add(new User('Tau'));

//users.userList = [{"id":"60c4878a-010d-4f72-8af2-89e6ae89a62d","name":"Benjamin"},{"id":"05ed6f55-2f11-4c3a-b4d2-b5a2deba7a4f","name":"Nicole"},{"id":"48c92a44-1b68-4b9b-bc08-84f702867311","name":"os"},{"id":"68aab1c1-d40c-4bd8-ac6f-328eec01498c","name":"benjamin_miranda_diniz"},{"id":"9a4af0db-e94f-49f6-bc49-93ed448786d7","name":"tarantini"},{"id":"99b0b3bd-5e54-4bcf-9ab4-0dca5035c63f","name":"daniela"}];

router.all('/', (req, res) => {
    res.status(200).json({ m: 'all', data: users.all() });
})

router.get('/:id', (req, res) => {
    console.log('par',req.params)
    const { id } = req.params;
    res.status(200).json({ m: `get`, data: users.findById(id) });
})

router.post('/novo', async (req, res) => {
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