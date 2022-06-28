import userModel from './models/user.js';

async function find(){
    let response
    await userModel.user.find().then(data => {
        response = data
        //res.json(data)
    })
    .catch(err => response.status(500)
    .json(err));
    return response
}
async function internalFind(){
    const response = await userModel.user.find().then(data => {
        console.log('ESTOY ACA??');
        return data
    })
    .catch(err => console.log(err));
    return response
}

function findById(id,res){
    userModel.user.findById(id)
    .then(data => {
        if (!data) res.status(404).json({ error: 'Not found 404', message: `User with id "${id} not found"` })
        res.json(data); 
    })
    .catch(err => res.status(500).json({ error: 'Not found 500', message: `User aca esta el error aca esta el error with id "${id} not found" and error: ${err}` }))
    //return res        /////PORQUE DEVUELVE IGUAL 
}

function findAndModif(id, body, res){
    userModel.user.findByIdAndUpdate(id, body)
        .then(data => {
            if (!data) res.status(404).json({ error: 'Not found', message: `User with id "${id} not found"` });
            res.status(201).json({ status: 'Updated', message: `User with id "${id} updated"` });
        })
        .catch(err => res.status(500).json(err));
}

function findAndDel(id, res){
    console.log(`Buscando ID: ${id}`);
    userModel.user.findByIdAndDelete(id)
    .then((data) => {
        if (!data) {
            res.status(404).json({ error: 'Not found', message: `userModel.JobX with id "${id} not found"` })
            }else{
             res.json({ status: `${id} deleted` })
             console.log('Objeto BORRADO');
            }
    })          ////CHEQUEAR DELETET ENE EL MENSJ O AL MENOS UN 200 ''    "status": "6286f3e96fff39f564ed9e11 deleted"    ''
    .catch(error => res.status(500).json(error));

}
async function createUser(userParams){       //I kept the body
    let response = {}
    const user = newUser(userParams)
    await user.save()
    .then(user => {
        response.data = user
        response.status = 0
        return response.data

        })
    .catch(err => {
        response.data = err
        response.status = 1
    });
}

function newUser(body){
    const user = new userModel.user({     ///NECESITO DATOS VALIDOS >> SERVICE
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        email: body.email,
        password: body.password,
        rol: body.rol,
        token: body.token
        ///////
    });
    return user
}

export default{
    find,findById,newUser,findAndModif,findAndDel,internalFind,createUser
}