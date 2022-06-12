import express from "express";
import bcrypt from "bcryptjs";
import Usuario from '../models/user.js';
import jwt from 'jsonwebtoken'


const Router = express.Router()

Router.post('/', function (req, res) {

    let body = req.body;


Usuario.user.findOne({ email: body.email }, (erro, usuarioDB)=>{
    if (erro) {
      return res.status(500).json({
         ok: false,
         err: erro
      })
   }
   console.log(erro);
// Verifica que exista un usuario con el mail escrita por el usuario.
  if (!usuarioDB) {
     return res.status(400).json({
       ok: false,
       err: {
           message: "Usuario o contraseña incorrectos"
       }
    })
  }
  console.log('user aqui');
  console.log(body);

  console.log(usuarioDB);
  
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
  console.log('PASE EL BCRYPT');

// Genera el token de autenticación

   let token = jwt.sign({
          usuario: usuarioDB,
       }, 'seed-de-prueba', {
       expiresIn: '24h'
   })
   res.json({
       ok: false,
       usuario: usuarioDB,
       token,
   })
   console.log('login salida------------------------------------------------');
   console.log(token);
})

})


export default {
   Router
}



