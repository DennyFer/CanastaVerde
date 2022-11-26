const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:60},
    nombre_producto:{type: String, required: true, max:100},
    unidad_medida:{type: String, required: true, max:60},
    peso:{type: Number, required: true, max:300},
   
});

module.exports = mongoose.model("productos", ProductosSchema); 