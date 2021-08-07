import { Router } from "express";
import * as controllers from "../controllers/Consult";
const consultRouter = Router();

consultRouter.get("/consultCEP/:code", controllers.consultCEP);

export default consultRouter;
