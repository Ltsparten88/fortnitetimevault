const path = require('path')
const fs = require("fs"); // Or `import fs from "fs";` with ESM

module.exports = (app) => {
    app.get('/panel/main.css', function (req, res) {
        res.sendFile(path.join(__dirname + '/panel/main.css'));
    });

    app.get('/panel/icon.png', async function (req, res) {
        res.sendFile(path.join(__dirname + '/panel/icon.png'));
    });
}