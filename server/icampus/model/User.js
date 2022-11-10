const db = require('../config/dbConn');

class User {
    constructor(username, pwd, email, first_name, last_name, phone_number, roles, refreshtoken) {
        this.username = username;
        this.pwd = pwd;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name; 
        this.phone_number = phone_number;
        this.roles = roles; 
        this.refreshtoken = refreshtoken;
    }
    // save new user 
    save() {
        // let d = new Date();
        // let yyyy = d.getFullYear();
        // let mm = d.getMonth() +1;
        // let dd = d.getDate();
        // let createAtDate = `${yyyy}-${mm}-${dd}`
        let sql = ` 
        INSERT INTO users (username, pwd , email, first_name, last_name, phone_number, roles, refreshtoken) VALUES ('${this.username}', '${this.pwd}' , '${this.email}', '${this.first_name}', '${this.last_name}', '${this.phone_number}', '${this.roles}', '${this.refreshtoken}');`;
        return db.execute(sql);
    }
    static userUpdateRefresh(username, refreshtoken) {
        let sql = `UPDATE users SET refreshtoken = '${refreshtoken}' WHERE username = '${username}';`;
        return db.execute(sql)
    }
    static findUserToken(refreshtoken){
        let sql = `SELECT * FROM users WHERE refreshtoken = '${refreshtoken}';`;
        return db.execute(sql)

    }
    static findOneUser(username){
        let sql = `SELECT * FROM users WHERE username = '${username}'`;
        return db.execute(sql)
    }
}
module.exports = User;