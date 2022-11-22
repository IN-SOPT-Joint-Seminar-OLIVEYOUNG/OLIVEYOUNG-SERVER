import { Router } from "express";
import { MainController } from "../controller";

const router: Router = Router();

//* 추천 상품 조회
router.get("/pick", MainController.getPickedProduct);

//* 브랜드별 상품 조회
router.get("/brand", MainController.getBrandProduct);

export default router;
