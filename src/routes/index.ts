import { Router } from "express";
import consultRouter from "./consult.routes";

const routes = Router();
routes.use("/result", consultRouter);

export default routes;
