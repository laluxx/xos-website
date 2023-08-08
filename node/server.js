const express = require('express');
const exec = require('child_process').exec;

const app = express();
const PORT = 4000;  // You can use another port if you want

app.get('/isPythonRunning', (req, res) => {
    exec('pgrep -f "python3 server.py"', (error, stdout, stderr) => {
        if (stdout) {
            // If there is a stdout, it means the process is running.
            res.send({ status: 'running' });
        } else {
            res.send({ status: 'not running' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Node server is running on port ${PORT}`);
});
