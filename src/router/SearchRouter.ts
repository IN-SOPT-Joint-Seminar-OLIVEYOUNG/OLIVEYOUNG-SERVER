import { Router } from "express";
import { SearchController } from "../controller";

const router: Router = Router();

//* 검색 결과 가져오기
router.get("/", SearchController.getSearchData);

export default router;
