const fs = require("fs");

// Creating a new file
//fs.writeFileSync('read.txt', "Good Morning")

//fs.writeFileSync('read.txt', "Hey,Good Morning")

//add text in existing file
// fs.appendFileSync('read.txt', " how are you I am fine Thank You");

//read data in another file

//Node.js includes an additional data type calles buffer.
// Not available in js.
// Buffer is mainely used to store binary data,
// while reading from file or receiving packets over the network.

const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);