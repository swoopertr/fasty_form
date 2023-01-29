let prisma = require('../prisma/client');

let answerWork = {

    getUserAnswerById : async (id)=>{
        const item = await prisma.useranswers.findUnique({
            where: {
                id
            }
        });
        return item;
    },
    
    updateUserAnswer: async (userAnswer)=>{

    },
    deleteUserAnswer: async ()=>{

    },
    insertUserAnswer: async ()=>{

    }
};

module.exports = answerWork;