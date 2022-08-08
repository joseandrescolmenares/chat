const mongoose = require('mongoose')

 const user = new mongoose.Schema({
    name : {
        type: 'string',
        required: [true, 'nomre es requirido']
    },
    correo: {
        type: 'string',
        unique: true,
    },

    contraseña : {
        type: 'string',
    }
})
console.log(mongoose.models)
export default mongoose.models.users || mongoose.model('users', user)