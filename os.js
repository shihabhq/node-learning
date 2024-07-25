import os, { version } from "os";

const operatingSystemArc = os.arch();
//machine info
const machine = os.machine();

//the pc userInfo object
const userInfo = os.userInfo();
//total memory
const totalMem = os.totalmem();
//free memory
const freeMem = os.freemem();
//cpus
const cpus = os.cpus();
//home directory
const homeDir = os.homedir();
//host name or myname
const myName = os.hostname(); //AgentDev
//what is your platform
const platform = os.platform(); //linux
//the system is on for how long
const uptimeInHours = os.uptime() / 60 / 60;

console.log(uptimeInHours.toFixed(2));

//get the current os version
const Osversion = os.version()
console.log(operatingSystemArc)