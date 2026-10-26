const  os = require('os');

console.log(" platform :",os.platform());
console.log("CPU core:",os.cpus().length);

const totalMB=os.totalMem() / 1024* 1024 .toFixed(0);

console.log("totalMem:",os.totalMem());
const freeMB=os.freemem() / 1024* 1024 .toFixed(0);

console.log("freeMem:",os.freemem());

const  uptime=os.uptime() /60 .toFixed(0);

console.log("uptime:",os.uptime);
console.log("HostName:",os.HostName);
