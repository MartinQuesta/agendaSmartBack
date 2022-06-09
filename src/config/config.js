// ==============================
// Port
// ==============================
process.env.PORT = process.env.PORT || 3500;

// ==============================
// Enviroment
// ==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==============================
// Database
// ==============================
let urlDB = "";
if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb://localhost:27017/mediumNodeLogin";
} else {
    urlDB = "here write the mongo connection with mongo atlas and      other type of connection mode"
};
process.env.URLDB = urlDB;

// ==============================
// TOKEN END
// ==============================
process.env.CADUCIDAD_TOKEN = '48h';

// ==============================
// autentication SEED
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';
