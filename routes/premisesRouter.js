import express from "express";
import { addPremise, viewAllPremises, viewPremise, viewPremisesByMember, viewPremisesByRoute,updatePremise } from '../controllers/premisesController.js'
import { authenticate } from '../middlewares/auth.js';

const premisesRouter = express.Router();

//Add a Premise
premisesRouter.post("/", authenticate, addPremise);

//View a premise premises/:id
premisesRouter.get("/:id", authenticate, viewPremise);

//View all premises premises/
premisesRouter.get("/", authenticate, viewAllPremises);

//View premises by member premises/member/:id
premisesRouter.get("/member/:id", authenticate, viewPremisesByMember);

//View premises by member premises/route/:id
premisesRouter.get("/route/:id", authenticate, viewPremisesByRoute);

//Update a premise
premisesRouter.put("/:id", authenticate, updatePremise);

export default premisesRouter;