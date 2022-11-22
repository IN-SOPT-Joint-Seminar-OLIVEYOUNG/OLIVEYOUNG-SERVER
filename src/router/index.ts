import { Router } from "express";
import MainRouter from "./MainRouter";
import SearchRouter from "./SearchRouter";

const router: Router = Router();

router.use("/main", MainRouter);
router.use("/search", SearchRouter);

export default router;
