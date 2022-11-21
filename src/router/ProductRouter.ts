import { Router } from "express";
import { ProductController } from "../controller";

const router: Router = Router();

//* 상세 정보 가져오기
router.get("/:id", ProductController.getProductDetail);

export default router;
