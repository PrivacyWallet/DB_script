let mysql = require('mysql')


function connect_DB(){
    const connection  = mysql.createConnection({
        host: 'ali.fkynjyq.com',
        user: 'root',
        password: 'example',
        database:'privace'
       });
    connection.connect();
    console.log('connection established!')
    return connection;
}

function test()
{
    console.log('test start!')
    address='0x013293a2E8C40b46BB11F1ca23B3e00e1aC86D57'
    const onsuccess = v => console.log(v)
    const onfail = v => console.error(v)

    getTransactionsAsDataBuyer('0x013293a2E8C40b46BB11F1ca23B3e00e1aC86D57',onsuccess,res, onfail)
}


exports.getTransactionsAsDataBuyer = async function(address, onsuccess, onfail)
{
    let connection  =await connect_DB()
    
    await connection.query("SELECT * FROM databuyer where address='"+address+"'", function (error, results, fields) {
        if (error) 
            onfail(error);
        else
            onsuccess(results)
      });
}

exports.getTransactionsAsDataOwner = async function(address, onsuccess, onfail)
{
    let connection  =await connect_DB()
    
    await connection.query("SELECT * FROM dataowner where address='"+address+"'", function (error, results, fields) {
        if (error) 
            onfail(error);
        else
            onsuccess(results)
      });
}

exports.getCalculators = async function(onsuccess, onfail)
{
    let connection  =await connect_DB()
    
    await connection.query("SELECT * FROM calculators", function (error, results, fields) {
        if (error) 
            onfail(error);
        else
            onsuccess(results)
      });
}

exports.addCalculator = async function(calculator)
{
    let connection  =await connect_DB()
    
    await connection.query('INSERT INTO calculators (calculator)VALUES("'+calculator+'")', function (error, results, fields) {
        if (error) 
            throw error
        else
            console.log('sucess add '+calculator)
      });
}