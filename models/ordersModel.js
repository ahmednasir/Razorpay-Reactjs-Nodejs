var mongoose = require("mongoose");

var orderModel = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    entity: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    receipt: {
        type: String,
        required: true
    },
    offer_id: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    amount_paid: {
        type: Number,
        required: true
    },
    amount_due: {
        type: Number,
        required: true
    },
    attempts: {
        type: Number,
        required: true
    },
    notes: [String],
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Orders", orderModel, "Orders");