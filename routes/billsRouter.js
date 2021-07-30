import express from "express";
import {captureBill,viewBill, viewAllBills } from '../controllers/billsController.js'
import { authenticate } from '../middlewares/auth.js';

const billsRouter = express.Router();

//Capture a bill /
billsRouter.post("/", authenticate, captureBill);

//View all members bills/
billsRouter.get("/", viewAllBills);

//View a bills/:id
billsRouter.get("/:id", authenticate, viewBill);

export default billsRouter;