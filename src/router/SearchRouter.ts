import { Router } from "express";
import SearchController from "../controller/SearchController";

const router: Router = Router();

//* 메인 검색 화면
router.get("/main", SearchController.getSearchMain);

//* 검색 결과 가져오기
router.get("/", SearchController.getSearchData);

export default router;
