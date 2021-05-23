var mongoose = require("mongoose");

var transactionModel = mongoose.Schema({
    orderCreationId: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    razorpayOrderId: {
        type: String,
        required: true
    },
    razorpayPaymentId: {
        type: String,
        required: true
    },
    razorpaySignature: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Transactions", transactionModel, "Transactions");

// {
//     id: 'order_HEG9HiNKT5GGt8',
//     entity: 'order',
//     amount: 50000,
//     amount_paid: 0,
//     amount_due: 50000,
//     currency: 'INR',
//     receipt: 'receipt_order_74394',
//     offer_id: null,
//     status: 'created',
//     attempts: 0,
//     notes: [],
//     created_at: 1621778506
//   }
