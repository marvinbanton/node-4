const express = require('express')
const massive = require('massive')
const users = require('./controllers/users.js')

massive({
    host: 'localhost',
    port: 5432,
    database: 'node4',
    user: 'postgres',
    password: 'node4db'
}).then(db => {
    const app = express();

    app.set('db', db);

    app.post('/api/register', users.newRegistration)
    app.get('/api/protected/data', users.protect);
    app.post('/api/login', users.login);

    app.use(express.json());

    const PORT = 3001
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})
