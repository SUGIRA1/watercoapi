import Bills from "../models/billing.js";
import Customers from "../models/member.js";
import Premises from "../models/premise.js";
import nodemailer from "nodemailer";

//Add a Bill
export async function captureBill(req, res) {
    try {
        let billObj = {
                PremiseId: req.body.PremiseId,
                UserID: req.body.UserID,
                Reading: req.body.Reading,
                Amount: req.body.Reading * 10
            }
        let bill = await Bills.create(billObj);
        let custp = await Premises.findAll({where: {PremiseId: req.body.PremiseId}});
        let cust = await Customers.findAll({where: {Customerid: custp[0].Customerid}});
        let sendToMail = cust[0].Email;

        if (bill) {
            // send email
            // access ya29.a0AfH6SMAVs5WAR3gPsOSHJV-rTe-9iR77TbaooCzHjMdoVJH68WAMGCwN6AXIh5HuUz-ENb1qoXSia0MCrhVvvTaVHK6fc2helZQRVrjpQgk6lAvEEE35FpJIS3gJB2pSU2PEFco2GOYQmkEt5b3sxK8eMucn
            let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
                clientId: process.env.OAUTH_CLIENTID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
            });

            let mailOptions = {
                from: process.env.MAIL_USERNAME,
                to: sendToMail,
                subject: `Bill for the month`,
                text: `Hi, our esteemed customer. 
                Please pay your bill. Below are the details: \n
                Bill ID : ` + bill.billid + ` 
                Premise ID : ` + bill.PremiseId + `
                Amount to Pay : Rwf ` + bill.Amount + `
                \nClick here to PAY : https://waterrw.herokuapp.com/paybill.html`
            };

            transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Email sent successfully");
            }
            });
            // ...... //
            res.status(200).json({
                success: true,
                message: 'Bill created successfully',
                data: bill
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be created at this time'
            })
        }
        // Amount: req.body.Reading
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a bill
export async function viewBill(req, res) {
    try {
        let onebill = await Bills.findAll({where: {billid: req.params.id}});
        if (onebill) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: onebill
            })
        } else {
            res.json({
                success: true,
                message: 'No bill records found.',
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
export async function viewAllBills(req, res) {
    try {
        let allBills = await Bills.findAll();
        if (allBills) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: allBills
            })
        } else {
            res.json({
                success: true,
                message: 'No bill records found.',
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

