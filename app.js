const sql = require('mssql');
const config = require("./config");

function connect_sql(){
    return sql.connect(config.connection);
}

sql.on('error', err => {
    console.dir(err);
    sql.close();
});

function get(){
    connect_sql().then(pool => {
        return pool.request()
            .query('select * from test');
    }).then(result => {
        sql.close();
        console.log(result.recordset);
    }).catch(err => {
        console.dir(err);
        sql.close();
    });
}

get();