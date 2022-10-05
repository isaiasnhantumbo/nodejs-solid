import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (req: Request, res: Response) => {
  console.log(req);

  return createUserController.handle(req, res);
});

export { router };
