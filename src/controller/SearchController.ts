import { Request, Response } from "express";
import { SearchService } from "../service";

const getSearchData = async (req: Request, res: Response) => {
    const name = req.query.name;

    const data = await SearchService.getSearchData(name as string);

    if (!data) {
        return res.status(404).json({ status: 404, message: "존재하지 않는 데이터입니다." });
    }
    return res.status(200).json({ status: 200, message: "검색 결과 조회 성공", data });
};

const SearchController = {
    getSearchData,
};

export default SearchController;
