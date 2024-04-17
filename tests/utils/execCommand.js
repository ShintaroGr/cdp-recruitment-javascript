const {spawn} = require('child_process')

function execCommand(exec, args) {
    let stdout = '';
    let stderr = '';
    return new Promise((resolve) => {
        const process = spawn(exec, args);
        process.on('close', (code) => {
            resolve({code, output: `${stdout}${stderr}`});
        });
        process.stdout.on('data', (data) => {
            stdout += data.toString();
        });
        process.stderr.on('data', (data) => {
            stderr += data.toString();
        });
    });
}

module.exports = execCommand
