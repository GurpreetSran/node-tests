const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/users', (req, res) => {
    res.send([
        {   
            name: 'Galon',
            age: 25
        },
        {
            name: 'Dummy',
            age: 75
        }
    ]);
});

app.listen(3000, () => {
    console.log('server running on 3000');
})

module.exports.app = app;