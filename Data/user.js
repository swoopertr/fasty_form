let prisma = require('./../prisma/client');

let userWork = {
    getAllUsers: async ()=> {
        let users =  await prisma.user.findMany();
        return users;
    },
    getUserById : async (id)=>{
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });
        return user;
    },
    getUserByEmail : async (email)=>{
        const user = await prisma.user.findUnique({
            where: {
              email
            }
        });
        return user;
    },
    updateUser: async (user)=>{

    },
    deleteUser: async ()=>{

    },
    insertUser: async ()=>{

    }
};


module.exports = userWork;