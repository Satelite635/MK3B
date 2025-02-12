const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    merk: {
        type: String,
        required: true,
    },
    harga: {
        type: Number,
        required: true,
    },
    stok: {
        type: Number,
        required: true,
    },
    stok: {
        type: Number,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('Product', ProductSchema)