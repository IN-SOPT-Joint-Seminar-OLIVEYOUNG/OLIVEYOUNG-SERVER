import { Router } from "express";
import MainRouter from "./MainRouter";

const router: Router = Router();

router.use("/main", MainRouter);

export default router;
