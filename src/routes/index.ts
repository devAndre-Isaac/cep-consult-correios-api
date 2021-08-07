import { Router } from "express";
import trackingRouter from "./Tracking.routes";

const routes = Router()
routes.use("/track", trackingRouter)

export default routes