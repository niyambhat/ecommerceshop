var mysql = require('mysql');

var con = mysql.createConnection({
  host: "bl8vs4yngmtownwqhlso-mysql.services.clever-cloud.com",
  user: "umfqc17yyfxibky2",
  password: "En8xMmPzXjrepRBZGFCj",
  database: "bl8vs4yngmtownwqhlso"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con