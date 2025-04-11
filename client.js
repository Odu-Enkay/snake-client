// establishes a connection with the game server
const net = require("net");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
});
  conn.on('data', (data) => {
    console.log('Move: down ', data);
});

  rl.on('line', (input) => {
  // console.log(`Received: ${input}`);
    connection.write(input)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = connect;
