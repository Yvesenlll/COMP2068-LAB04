const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // this must exist
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }, 
},  {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);