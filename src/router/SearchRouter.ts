import { Router } from "express";
import SearchController from "../controller/SearchController";

const router: Router = Router();

//* 메인 검색 화면
router.get("/", SearchController.getSearchMain);

export default router;
