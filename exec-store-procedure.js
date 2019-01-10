"use strict";

const config = require("./config");
const sqlConnection = require("./sql");
const sql = new sqlConnection(config.connectionSQL);

(async () => {
    try {
        let select = await sql.execStoreProcedure("USP_Test_List");
        console.log(select.recordset);
    } catch (error) {
        sql.close();
        console.log(error);
    }
})();