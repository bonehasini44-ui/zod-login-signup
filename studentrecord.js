const fs = require('fs');
2
fs.writeFile('student.txt','Hello Node.js',(err)=> {
    if (err) throw err;
    console.log('File written successfully');
     const students = ['Hasini','priyanka','mausam','hari','bharath'];
      for(let i=0;i<=students.length;i++);
       fs.appendFile('student.txt name${i}');
       if (err) throw err;
       console.log('5 students added successfully');
});
    fs.readFile('student.txt','utf8');
      console.log()

