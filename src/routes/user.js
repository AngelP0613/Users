const express = require("express")
const router = express.Router()

//importar modelo
const User =require("../models/user.model")

//router.get("ruta,()=> {}")

//crear usuario
router.post("/create-user",async(req, res)=>{
    
    let {email} = req.body
    
    
    //let email = req.body.email
    email = email.toLowercase()
    req.body.email = email
    //obtener usuarios
    let userExist = await User.find({email: email})
    

    //validar si existe el emaol
    if(userExist.length !== 0){
        return res.sendStatus(400).json({msg: "usuario ya existe"})
    }
    //guardar o mandar error
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).json({msg:"usuario registrado"})
})
//eliminar usuario
router.delete("/delete-user", async (req,res) => {
await User.findByIdAndDelete(req.query.id)
return res.status(200).json({msg:"usuario eliminado",id:req.query.id})
})
//actualizar usuario
router.put("/update-user", async (req,res)=>{
    await User.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.status(201).json({msg:"datos de usuario actualizados"})
})
//listar productos
router.get("/get-users", async(req,res)=>{
    const users = await User.find(/*query-consulta-filtros*/)
return res.status(200).json({data:users})
})
//exportar rutas 
module.exports=router