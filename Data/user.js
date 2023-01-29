let prisma = require('./../prisma/client');



let work = {
    getAllUsers: async ()=> {
        let users =  await prisma.user.findMany();
        return users;
    }
};


module.exports = work;