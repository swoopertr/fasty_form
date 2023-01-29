let prisma = require('../prisma/client');

let answerWork = {

    getAnswerById : async (id)=>{
        const item = await prisma.answers.findUnique({
            where: {
                id
            }
        });
        return item;
    },
    
    updateAnswer: async (answer)=>{

    },
    deleteAnswer: async ()=>{

    },
    insertAnswer: async ()=>{

    }
};


module.exports = answerWork;