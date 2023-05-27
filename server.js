const express = require("express");
const app = express();
app.use(express.json());

const port = 8080; // default port to listen

var bucketDef = {
    bucket: {
        name: "bucket",
        slots: [
            {
                name: "name",
                labels: {
                    label: "Name",
                    labelp: "Names"
                }
            },
            {
                name: "label",
                labels: {
                    label: "Label",
                    labelp: "Lables"
                }
            }, 
            {
                name: "label_plural",
                labels: {
                    label: "Label plural",
                    labelp: "Label plurals"
                }
            },
            {
                name: "slots",
                labels: {
                    label: "Slot",
                    labelp: "Slots"
                }
            } 
        ],
    },
};

var bucketData = {
    bucket: [{
        name: "bucket",
        label: "Bucket",
        labelp: "Buckets",
        slots: [{name: "name"}, {name: "label"}, {name: "label_plural"}, {name: "slots"} ],
    }],
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/App.js", (req, res) => {
    res.sendFile(__dirname + "/src/components/App.js");
});
app.get("/List.js", (req, res) => {
    res.sendFile(__dirname + "/src/components/List.js");
});
app.get("/ListHeader.js", (req, res) => {
    res.sendFile(__dirname + "/src/components/ListHeader.js");
});
app.get("/Dialog.js", (req, res) => {
    res.sendFile(__dirname + "/src/components/Dialog.js");
})

app.get("/src/css/:filename", function(req, res){
    console.log(req.params.filename)
    res.sendFile(__dirname + "/src/css/" + req.params.filename);
});

app.post("/list/getData", (req, res) => {
    var bucketId = req.body.bucket;
    
    res.send({
        bucket: bucketId,
        bucketLabel: bucketData['bucket'].find(bucketRow => bucketRow.name === bucketId).label,
        records: bucketData[bucketId], 
        slotDefs: bucketDef[bucketId].slots
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
