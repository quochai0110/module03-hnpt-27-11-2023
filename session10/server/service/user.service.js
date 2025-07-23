
const database = require("../connection/connectionMysql");
// function lấy tất cả user
async function getAllUser() {
    const query = "select * from user";
    let result = await database.execute(query);
    // database.execute("CREATE DATABASE users")
    return result[0];
}
module.exports={
    getAllUser,
}
