import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


let rolesValidos = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es necesario'],
    },
    edad: {
        type: Number,
        required: [true, 'La edad es necesario'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "El correo es necesario"],
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"],
    },
    rol: {
        type: String,
        default: 'USER',
        required: [true],
        enum: rolesValidos,
    },
});

const user = mongoose.model('Usuario', usuarioSchema)
    // elimina la key password del objeto que retorna al momento de crear un usuario
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
 }

 usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})

function testUser (){
    const user = mongoose.model('Usuario', usuarioSchema)
    return createUserTest(user)
}

function createUserTest(){
    const user = new userX({
        nombre: 'Juan',
        apellido: 'Gimenez',
        edad: 28,
        email: 'juan@hot.com',
        password: "12345",
        rol: 'USER'
      
    })
    return user
}



export default {
    user, createUserTest, testUser
}