const Razorpay = require("razorpay");
const express = require("express");
const uuid = require("uuid")
const { saveTxn, saveOrders, getAllTxns } = require("../services/dbService");

const router = express.Router();

router.post("/create-orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const { amount, currency } = req.body;

        if (!amount || !currency) throw "Missing parameters";

        let receiptId = `receipt_order_${uuid.v4().split("-")[0]}`

        const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: currency,
            receipt: receiptId
        };

        const order = await instance.orders.create(options);

        // save orders created for future reference
        saveOrders(order)

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/store-order', (req, res) => {
    try {
        const body = req.body;
        if (!body || Object.keys(body).length == 0) throw "NullBody";

        saveTxn(body)
            .then(resp => {
                res.status(200).send(resp);
            }).catch(err => {
                console.log(err)
                res.status(400).send(error);
            })

    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/all-txns', (req, res) => {
    try {
        getAllTxns()
            .then(resp => {
                res.status(200).send(resp);
            }).catch(err => {
                console.log(err)
                res.status(400).send(error);
            })
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router