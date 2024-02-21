const mongoose = require('mongoose')
const validateMongoDbId = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) throw new Error("Este id no es válido o no se encuentra")
}

module.exports = validateMongoDbId