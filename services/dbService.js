const transactionModel = require('../models/transactionModel');
const ordersModel = require('../models/ordersModel');

const saveTransaction = (body) => {
    return new Promise((resolve, reject) => {
        try {
            transactionModel.create(body, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const saveOrders = (body) => {
    return new Promise((resolve, reject) => {
        try {
            ordersModel.create(body, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const getAllTransactions = ()=> {
    return new Promise((resolve, reject)=>{
        try {
            transactionModel.find({},(err, txns)=>{
                if(err) reject(err)
    
                resolve(txns)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    saveTxn: saveTransaction,
    getAllTxns: getAllTransactions,
    saveOrders: saveOrders
}