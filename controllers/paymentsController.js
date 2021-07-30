import Payments from "../models/payment.js";
import Bills from "../models/billing.js";
import Customers from "../models/member.js";
import Premises from "../models/premise.js";


//Add a payment
export async function capturePayment(req, res) {
    try {
        // implement hiding billid - automatic
        let bill = await Bills.findAll({where: {billid: req.body.billid}});
        let toPay = bill[0].Amount;
        let toPayId = bill[0].billid;
        let toPremise = bill[0].PremiseId;

        let custp = await Premises.findAll({where: {PremiseId: toPremise}});
        let cust = await Customers.findAll({where: {Customerid: custp[0].Customerid}});
        let sendToMail = cust[0].Email;
        // check if bill has already been paid
        // if (bill[0].Status) {
            
        // } else {
            
        // }
        let paymentObj = {
                billid: req.body.billid,
                ExpectedAmount: toPay,
                PaidAmount: req.body.PaidAmount,
                PremiseId: toPremise
            }
        let payment = await Payments.create(paymentObj);
        bill[0].Status = true;
        let newStatus = await Bills.findAll({where:{billid: req.body.billid}});
        let rem = toPay - payment.PaidAmount
        if (payment.PaidAmount >= toPay){
            newStatus[0].update({Status : true})
        }
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'Payment created successfully',
                data: payment
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Payment could not be created at this time'
            })
        }
        // find premise
        // find biller
        // get bill amount
        // enter amount
        // calc arrears
        // create payment

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a payment
export async function viewPayment(req, res) {
    try {
        let onepayment = await Payments.findAll({where: {TransactionID: req.params.id}});
        if (onepayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: onepayment
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all Payments
export async function viewAllPayments(req, res) {
    try {
        let allPayments = await Payments.findAll();
        if (allPayments) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: allPayments
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View Premise Payments
export async function viewPaymentsByPremise(req, res) {
    try {
        let onepayment = await Payments.findAll({where: {PremiseId: req.params.id}});
        if (onepayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: onepayment
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}