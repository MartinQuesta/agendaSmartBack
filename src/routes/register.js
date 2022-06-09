import express from "express";
import bcrypt from "bcrypt";
import Usuario from '../models/user.js';
const Router = express.Router()

Router.post('/register', function (req, res) {
  let body = req.body;
  let { nombre, email, password, role } = body;
  let usuario = new Usuario({
    nombre,
    email,
    password: bcrypt.hashSync(password, 10),
    role
  });
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
