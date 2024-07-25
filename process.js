//getting the cli things
console.log(process.argv)
//process.env
process.env.LOGNAME // my computer's name
//pid
console.log(process.pid)
//cwd()
console.log(process.cwd()) //current working directory
//memoryUsage()
console.log(process.memoryUsage())
//uptime - this is short as it counts the time between the command line running time and the execution finishing time
console.log(process.uptime())
//exit
process.exit() //exit(1) means false

console.log('hello after the exit that will not gonna run')