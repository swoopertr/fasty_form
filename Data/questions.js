let prisma = require('../prisma/client');

let questionWork = {

    getQuestionById : async (id)=>{
        const item = await prisma.questions.findUnique({
            where: {
                id
            }
        });
        return item;
    },
    
    updateQuestion: async (question)=>{

    },
    deleteQuestion: async ()=>{

    },
    insertQuestion: async ()=>{

    }
};


module.exports = questionWork;