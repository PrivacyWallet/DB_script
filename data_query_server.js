let express = require("express");
let http = require("http");
let cors = require("cors");
let dbManager = require("./db_manager");

let config = {
  PORT: 3000,
};

let app = express();
app.use(cors());

app.use(express.json());

app.get("/getTransactionsAsDataBuyer", async function (req, res) {
  let address = req.query.address;
  let results = await dbManager.getTransactionsAsDataBuyer(
    address,
    function (results) {
      res.send(results);
    },
    function onfail() {
      console.error("query error!");
      return res.status(401).json({ error: "query error!" });
    }
  );
});

app.get("/getTransactionsAsDataOwner", async function (req, res) {
  let address = req.query.address;
  let results = await dbManager.getTransactionsAsDataOwner(
    address,
    function (results) {
      res.send(results);
    },
    function onfail() {
      console.error("query error!");
      return res.status(401).json({ error: "query error!" });
    }
  );
});

app.get("/getCalculators", async function (req, res) {
  let results = await dbManager.getCalculators(
    function (results) {
      res.send(results);
    },
    function onfail() {
      console.error("query error!");
      return res.status(401).json({ error: "query error!" });
    }
  );
});

app.post("/addCalculator", async function (req, res) {
  let calculator = req.body.calculator;
  await dbManager.addCalculator(address);
});

app.get("/getData", async function (req, res) {
  let address = req.query.address;
  let results = await dbManager.getData(
    address,
    function (results) {
      res.send(results);
    },
    function onfail(error) {
      console.error("query error!");
      return res.status(401).json({ error: "query error!" });
    }
  );
});

app.post("/setData", async function (req, res) {
  let data = {
    id: req.body.id,
    price: req.body.price,
    epsilon: req.body.epsilon,
    calculatorContract: req.body.calculatorContract,
    address: req.body.address,
  };

  console.log("get data" + data);

  dbManager.setData(data);
});

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
