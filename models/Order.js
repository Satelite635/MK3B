const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    nama_pemesan: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    total: {
        type: Number,
        required: true,
    },
    jumlah_pesanan: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Order', OrderSchema)