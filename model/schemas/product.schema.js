/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
/** Schema creation */

const productSchema = mongoose.Schema({
    idProduct:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true,    
    },
    price:{
        type: "Number",
        required: true,
    },
    stock:{
        type: "Number",
        required: true,
    },
    qualification:{
        type: "String",
        required: true
    },
    id_category:{
        type: "String",
        required: true
    },
    id_branch:{
        type: "String",
        required: true
    },
    discount:{
        type: "Number",
        required: true
    }
});

/** Schema exportation */
productSchema.plugin(validator);
module.exports = productSchema;