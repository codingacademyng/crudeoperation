
const mongoose = require('mongoose')

const contactschema =  mongoose.Schema({
    lastname:{
        type:String,
        required:true,
    },

    firstname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
   },
    
    {
        timestamp:true
    }

)

const  Contacts = mongoose.model('Contacts' , contactschema);
module.exports  = Contacts;