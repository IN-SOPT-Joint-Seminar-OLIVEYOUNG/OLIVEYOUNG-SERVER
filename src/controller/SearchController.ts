import { success } from "./../constants/response";
import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail } from "../constants/response";
import { SearchService } from "../service";

const getSearchData = async (req: Request, res: Response) => {
  const name = req.query.name;
  try {
    const data = await SearchService.getSearchData();
    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_SEARCH_RESULT_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const SearchController = {
  getSearchData,
};

export default SearchController;
