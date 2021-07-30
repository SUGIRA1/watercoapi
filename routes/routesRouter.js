import express from "express";
import { addRoute, viewAllRoutes, viewRoute, updateRoute} from '../controllers/routesController.js'
import { authenticate } from '../middlewares/auth.js';

const routesRouter = express.Router();

//Add a Route
routesRouter.post("/", authenticate, addRoute);

//View a route routes/:id
routesRouter.get("/:id", authenticate, viewRoute);

//View all routes routes/
routesRouter.get("/", authenticate, viewAllRoutes);

//Update route record routes/
routesRouter.put("/:id", authenticate, updateRoute);

export default routesRouter;