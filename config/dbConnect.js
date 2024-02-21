const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("Base de datos conectada exitosamente");
    }catch(error){
        console.log("Error en la base de datos");
    }
}

module.exports = dbConnect;