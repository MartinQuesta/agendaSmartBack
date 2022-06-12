import express from "express";
import bcrypt from "bcryptjs";
import Usuario from '../models/user.js';
const Router = express.Router()

Router.post('/', function (req, res) {
  let body = req.body;
  console.log('Aqui estamo en register');
  console.log(body);
  let { nombre, apellido, edad, email, password, rol } = body;
  let usuario = new Usuario.user({
    nombre,
    apellido,
    edad,
    email,
    password: bcrypt.hashSync(password, 10),
    rol
  });
  console.log(usuario);
usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
         ok: false,
         err,
      });
    }
    res.json({
          ok: true,
          usuario: usuarioDB
       });
    })
});

export default {
  Router
}
