let sql = require('mssql');

// const connectionString = 'mssql://{user-name}:{password}@{db-server-ip}:{sql-server-port}/{db-name}';
const connectionString = `Server=AWNTS74;Database=BelcorpPeru;User ID=sa;Password=C0n$ult0r@$;Encrypt=true`;
//const connectionString = `Server=AWNTS77;Database=BelcorpPeru;User ID=usrportalconsultorasppr;Password=Belcorp2016;Encrypt=true`;

const config = {
    user: 'usrportalconsultorasppr',
    password: 'Belcorp2016',
    server: 'AWNTS77', 
    database: 'BelcorpPeru',
    options: {
        encrypt: true
    }
}

sql.on('error', err => {
    console.dir(err);
    sql.close();
});

function get(){
    sql.connect(connectionString).then(pool => {
        return pool.request()
            .query('select * from configuracionpaisdatos');
    }).then(result => {
        sql.close();
        console.log(result.recordset);
    }).catch(err => {
        console.dir(err);
        sql.close();
    });
}

get();