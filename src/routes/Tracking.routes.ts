import { Request, Response, Router } from "express";

const trackingRouter = Router();

trackingRouter.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Running" });
});
        
export default trackingRouter;
