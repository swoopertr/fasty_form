let userData = require('./../Data/user');

let work = {
    getAllUsers: async ()=>{
        let users =  await userData.getAllUsers();
        return users;
    }
};

module.exports = work;