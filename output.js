const fs = require('fs');

fs.writeFile('output.txt', 'Hello Node.js', (err)=> {
    if (err) throw err;
    console.log('File Written successfully');

    fs.appendFile('output.txt','\nsecond line', (err) => {
        if (err) throw err;
        console.log('Content appended');
    });
});