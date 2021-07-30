import express from "express";
import { capturePayment, viewPayment,viewAllPayments,viewPaymentsByPremise } from '../controllers/paymentsController.js'
import { authenticate } from '../middlewares/auth.js';

const paymentsRouter = express.Router();

//Capture a payment
paymentsRouter.post("/", authenticate, capturePayment);

//View a payment payments/:id
paymentsRouter.get("/:id", authenticate, viewPayment);

//View all members payments/
paymentsRouter.get("/", viewAllPayments);

//View payments by Premise payments/premise/:id
paymentsRouter.get("/premise/:id", authenticate, viewPaymentsByPremise);

export default paymentsRouter;