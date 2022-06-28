import jwt from 'jsonwebtoken'

const config = process.env;

let state = (req) => {
    console.log('Aqui AUTH.js----------------');
    console.log(req.headers["x-access-token"]);
    return true;
}

const verifyToken = (req,res) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, config.SEED_AUTENTICACION, (err, decoded) => {
    if (err) {
      console.log('Token unauthorized');
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = cleanMail(decoded.usuario.email);
    console.log('Token Verificado OK');
    return req.userId
  });
};

function cleanMail(email){
  let newStr = email.replace(/@/g, '');
  newStr = newStr.replace(/\./g, '');
  return newStr;
}

export default{
  verifyToken,state,
}

/*
isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  //isAdmin,
  
};

*/

