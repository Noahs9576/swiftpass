const express = require('express');
const app = express();
app.use(express.json());

const port = 8080; // default port to listen

var bucketDef = {
    bucket: {
        name: 'bucket',
        slots: [
            {
                name: 'name',
                labels: {
                    label: 'Name',
                    labelp: 'Names'
                }
            }, 
            {
                name: 'slots',
                labels: {
                    label: 'Slot',
                    labelp: 'Slots'
                }
            } 
        ],
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
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/src/style.css');
});

app.post('/list/getData', (req, res) => {
    var bucketId = req.body.bucket;
    res.send({records: bucketData[bucketId], slotDefs: bucketDef[bucketId].slots});
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
