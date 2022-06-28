import express from "express";
import bcrypt from "bcryptjs";
import Usuario from '../models/user.js';
import jwt from 'jsonwebtoken'


const Router = express.Router()

let token = ''

Router.post('/', function (req, res) {

let body = req.body;
        // Validate user input
      if (!(body.email && body.password)) {
      res.status(400).send("All input is required");
      }

//TODO Meter en un controller
Usuario.user.findOne({ email: body.email }, (erro, usuarioDB)=>{
    if (erro) {
      return res.status(500).json({
         ok: false,
         err: erro
      })
   }
// Verifica que exista un usuario con el mail escrita por el usuario.
  if (!usuarioDB) {
     return res.status(400).json({
       ok: false,
       err: {
           message: "Usuario o contraseña incorrectos"
       }
    })
  }

  
// Valida que la contraseña escrita por el usuario, sea la almacenada en la db
  if (! bcrypt.compareSync(body.password, usuarioDB.password)){
     console.log('estoy en el error de bcrypt');
     return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
     });
  }
  
  console.log(`PASE EL BCRYPT y muestro UserDB: ${usuarioDB.email}`);
// Genera el token de autenticación

   token = jwt.sign({
         usuario: usuarioDB,
         }, process.env.SEED_AUTENTICACION,{
         expiresIn: process.env.CADUCIDAD_TOKEN //'24h'
   })
   usuarioDB.token = token;

   res.json({
       ok: false,
       usuario: usuarioDB,
       token,
   })
})

})


export default {
   Router,token
}



