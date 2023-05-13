const express = require('express');
const app = express();
app.use(express.json());

const port = 8080; // default port to listen

var bucketDef = {
    bucket: {
        name: 'bucket',
        slots: [{name: 'name'}, {name: 'slots'} ],
    },
};

var bucketData = {
    bucket: [{
        name: 'bucket',
        slots: [{name: 'name'}, {name: 'slots'} ],
    }],
};
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/App.js', (req, res) => {
    res.sendFile(__dirname + '/src/components/App.js');
});
app.get('/List.js', (req, res) => {
    res.sendFile(__dirname + '/src/components/List.js');
});

app.post('/list/getData', (req, res) => {
    console.log(req.body.bucket);
    var bucketId = req.body.bucket;
    console.log({records: bucketData[bucketId], slotDef: bucketDef[bucketId].slots});
    res.send({records: bucketData[bucketId], slotDef: bucketDef[bucketId].slots});
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
