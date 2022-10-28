//1 importar mongoose
const mongoose = require("mongoose")

//Schema-collection

//2llamar a la clase Schema- instanciar
const {Schema} = mongoose
//3crear el Schema
const userSchema = new Schema(
    {// las llaves de la colceccion
        firstName:{type:String, required: true},
        lastName:{type: String, required:true},
        email:{type: String, default:""},
        password:{type: String, default:""},
        isAdmin:{type: Boolean, required:true},
        
    },
    {//que deseamos capturar
        versionKey:false,
        timestamps: true,

    },
)
//4exportar como modelo
//module.exports = mongoose.model("nombre coleccion, el esquema de la coleccion")
module.exports = mongoose.model("user",userSchema)