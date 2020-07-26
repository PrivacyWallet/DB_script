let express = require('express')
let http = require('http')
let app = express()
let dbManager=require('./db_manager')

let config = {
    PORT: 3000
}

app.use(express.json())



app.get('/getTransactionsAsDataBuyer',async function (req,res) {
    let address=req.body.address
    let results=await dbManager.getTransactionsAsDataBuyer(address,function(results)
    {
        res.send(results);
    },
    function onfail()
    {
        console.error('query error!')
    })
})


app.get('/getTransactionsAsDataOwner',async function (req,res) {
    //这里需要确定查dataowner的时候传入的究竟是address还是dataBuyerContractAddress
    let address=req.body.address
    let results=await dbManager.getTransactionsAsDataOwner(address,function(results)
    {
        res.send(results);
    },
    function onfail()
    {
        console.error('query error!')
    })
})

app.get('/getCalculators',async function (req,res) {
    let results=await dbManager.getCalculators(function(results)
    {
        res.send(results);
    },
    function onfail()
    {
        console.error('query error!')
    })
})

app.post('/addCalculator',async function (req,res) {
    let calculator=req.body.calculator
    await dbManager.addCalculator(address)
})

app.get('/getData',async function (req,res) {
    let address=getAddress(req)
    let results=await dbManager.getTransactionsAsDataBuyer(address,function(results)
    {
        res.send(results);
    },
    function onfail()
    {
        console.error('query error!')
    })
})


const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})