import { Router } from "express";
import userRouter from "./userRouter";
import SearchRouter from "./SearchRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/search", SearchRouter);

export default router;
