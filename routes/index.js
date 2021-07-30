import express from "express";
import membersRouter from "./membersRouter.js"
import billsRouter from "./billsRouter.js"
import paymentsRouter from "./paymentsRouter.js"
import premisesRouter from './premisesRouter.js'
import routesRouter from './routesRouter.js'
import usersRouter from './usersRouter.js'

const router = express.Router();


router.use("/members", membersRouter);
router.use("/bills", billsRouter);
router.use("/payments",paymentsRouter);
router.use("/premises", premisesRouter);
router.use("/routes", routesRouter);
router.use("/users", usersRouter);

export default router;