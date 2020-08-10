let mysql = require("mysql");

function connect_DB() {
  const connection = mysql.createConnection({
    host: "ali.fkynjyq.com",
    user: "root",
    password: "example",
    database: "privace",
  });
  connection.connect();
  console.log("connection established!");
  return connection;
}

let connection = connect_DB();

exports.getTransactionsAsDataBuyer = async function (
  address,
  onsuccess,
  onfail
) {
  await connection.query(
    "SELECT * FROM databuyer where address='" + address + "'",
    function (error, results, fields) {
      if (error) onfail(error);
      else onsuccess(results);
    }
  );
};

exports.getTransactionsAsDataOwner = async function (
  address,
  onsuccess,
  onfail
) {
  await connection.query(
    "SELECT * FROM dataowner where address='" + address + "'",
    function (error, results, fields) {
      if (error) onfail(error);
      else onsuccess(results);
    }
  );
};

exports.getCalculators = async function (onsuccess, onfail) {
  await connection.query("SELECT * FROM calculators", function (
    error,
    results,
    fields
  ) {
    if (error) onfail(error);
    else onsuccess(results);
  });
};

exports.addCalculator = async function (calculator) {
  await connection.query(
    'INSERT INTO calculators (calculator)VALUES("' + calculator + '")',
    function (error, results, fields) {
      if (error) throw error;
      else console.log("sucess add ", calculator);
    }
  );
};

exports.getData = async function (address, onsuccess, onfail) {
  await connection.query(
    "SELECT * FROM getdata where address='" + address + "'",
    function (error, results, fields) {
      if (error) onfail(error);
      else onsuccess(results);
    }
  );
};

exports.setData = async function (data) {
  sql =
    "INSERT INTO getdata(id,price,epsilon,calculatorContract,address)VALUES(" +
    '"' +
    data.id +
    '",' +
    data.price +
    "," +
    data.epsilon +
    "," +
    '"' +
    data.calculatorContract +
    '",' +
    '"' +
    data.address +
    '")';

  await connection.query(sql, function (error, results, fields) {
    if (error) {
      console.log("insert error!");
      throw error;
    } else console.log("sucess add ", data);
  });
};
