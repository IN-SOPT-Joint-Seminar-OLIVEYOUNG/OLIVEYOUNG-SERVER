import { Router } from "express";
import MainRouter from "./MainRouter";
import ProductRouter from "./ProductRouter";
import SearchRouter from "./SearchRouter";

const router: Router = Router();

router.use("/main", MainRouter);
router.use("/search", SearchRouter);
router.use("/product", ProductRouter);

export default router;
