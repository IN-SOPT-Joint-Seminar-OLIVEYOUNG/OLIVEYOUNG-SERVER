import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import SearchService from "../service/SearchService";

//* 추천 상품 조회
const getSearchMain = async (req: Request, res: Response) => {
  try {
    const data = await SearchService.getSearchMain();

    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_SEARCH_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* 검색 결과 조회
const getSearchData = async (req: Request, res: Response) => {
  const name = req.query.name;
  try {
    const data = await SearchService.getSearchData();
    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_SEARCH_RESULT_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const SearchController = {
  getSearchData,
  getSearchMain,
};

export default SearchController;
