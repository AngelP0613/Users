const mongoose = require("mongoose")
dbName = "bit-shop"
const uri = `mongodb+srv://angelp-06:angelp.0614@cluster0.0vt8o4s.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri)
.then(
    (db)=>console.log("conexion a base de dados exito"))
    .catch((err)=> console.log(err))

    module.exports = mongoose