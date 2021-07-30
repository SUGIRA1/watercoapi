import express from "express";
import { addMember, viewAllMembers, viewMember, updateMember, deleteMember } from '../controllers/membersController.js'
import { authenticate } from '../middlewares/auth.js';

const membersRouter = express.Router();

//Add a Member
membersRouter.post("/", authenticate, addMember);

//View a member members/:id
membersRouter.get("/:id", authenticate, viewMember);

//View all members members/
membersRouter.get("/", authenticate, viewAllMembers);

//Update member record members/
membersRouter.put("/:id", authenticate, updateMember);

//Delete a member members/:id
membersRouter.delete("/:id", authenticate, deleteMember);

export default membersRouter;