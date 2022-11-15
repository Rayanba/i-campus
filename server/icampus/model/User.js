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
        return db.execute(sql);
    }
    static findUserToken(refreshtoken){
        let sql = `SELECT * FROM users WHERE refreshtoken = '${refreshtoken}';`;
        return db.execute(sql);

    }
    static findOneUser(username){
        let sql = `SELECT * FROM users WHERE username = '${username}'`;
        return db.execute(sql);
    }
    static findInstInBuilding(){
        let sql = `SELECT count(username) As instInBuilding FROM users WHERE roles = JSON_ARRAY(1984) AND in_building = true ;
        `;
        return db.execute(sql);
    }
    static findInstInRoom(){
        let sql = `SELECT count(users.username) as InRoom
        FROM attendance
        JOIN users on users.user_id = attendance.user_id 
        JOIN course on course.course_id = attendance.course_id 
        WHERE course_day = DAYNAME(CURRENT_DATE) AND course_start_time <= CURRENT_TIME AND course_end_time >= CURRENT_TIME AND roles = JSON_ARRAY(1984);`;
        return db.execute(sql);
    }
    static findStudInBuilding(){
        let sql = ` SELECT count(username) As stdInBuilding FROM users WHERE roles = JSON_ARRAY(2001) AND in_building = true ;
        `;
        return db.execute(sql);
    }
    static findStudInRoom(){
        let sql = `SELECT count(users.username) as InRoom
        FROM attendance
        JOIN users on users.user_id = attendance.user_id 
        JOIN course on course.course_id = attendance.course_id 
        WHERE course_day = DAYNAME(CURRENT_DATE) AND course_start_time <= CURRENT_TIME AND course_end_time >= CURRENT_TIME AND roles = JSON_ARRAY(2001);`;
        return db.execute(sql);
    }

    static findEmptInBuilding(){
        let sql = `SELECT count(username) As empInBuilding FROM users WHERE roles = JSON_ARRAY(1000) AND in_building = true;`;
        return db.execute(sql);
    }
    // static findEmptInRoom(){
    //     let sql = ``;
    //     return db.execute(sql);
    // }
    static findEmpInfoInBuilding(){
        let sql= `SELECT  username AS username,  email , first_name AS firstName, last_name AS lastName, phone_number AS phone
        FROM users WHERE roles = JSON_ARRAY(1000) AND in_building = true;`
        return db.execute(sql);
    }
    static findInstInfoInBuilding(){
        let sql= `SELECT  username AS username,  email , first_name AS firstName, last_name AS lastName, phone_number AS phone
        FROM users WHERE roles = JSON_ARRAY(1984) AND in_building = true;`
        return db.execute(sql);
    }
    static findStudInfoInBuilding(){
        let sql= `SELECT  username AS username,  email , first_name AS firstName, last_name AS lastName, phone_number AS phone
        FROM users WHERE roles = JSON_ARRAY(2001) AND in_building = true;`
        return db.execute(sql);
    }
}
module.exports = User;


