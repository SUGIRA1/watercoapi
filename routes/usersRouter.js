import express from "express";
import { addUser, viewAllUsers, viewUser, signIn, updateUser, updateUserPass, deleteUser } from '../controllers/usersController.js'
import { authenticate } from '../middlewares/auth.js';

const usersRouter = express.Router();

//Add a User - Sign Up - Authenticate.
usersRouter.post("/", addUser);

//Add a User - Sign In - No need of Authentication
usersRouter.post("/signin", signIn);

//View a User users/:id - Authenticate.
usersRouter.get("/:id", authenticate, viewUser);

//View all Users users/ - Authenticate.
usersRouter.get("/", authenticate, viewAllUsers);

//Update user record users/id
usersRouter.put("/:id",authenticate, updateUser);

//Update user password users/pass/id
usersRouter.put("/pass/:id",authenticate, updateUserPass);

//Close user account
usersRouter.delete("/:id", authenticate, deleteUser);

export default usersRouter;