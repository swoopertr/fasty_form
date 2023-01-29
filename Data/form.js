let prisma = require('./../prisma/client');

formWork = {
    getAllForms: async ()=> {
        let forms =  await prisma.form.findMany();
        return forms;
    },
    getFormById : async (id)=>{
        const form = await prisma.form.findUnique({
            where: {
                id
            }
        });
        return form;
    },
    
    updateForm: async (form)=>{

    },
    deleteForm: async ()=>{

    },
    insertForm: async ()=>{

    }
};


module.exports = formWork;