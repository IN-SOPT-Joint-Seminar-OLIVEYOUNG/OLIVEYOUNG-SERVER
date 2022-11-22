import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { MainService } from "../service";

//* 추천 상품 조회
const getPickedProduct = async (req: Request, res: Response) => {
  try {
    const data = await MainService.getPickedProduct();

    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_PICKED_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* 브랜드 별 상품 조회
const getBrandProduct = async (req: Request, res: Response) => {
  try {
    const data = await MainService.getBrandProduct();

    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.GET_BRAND_PRODUCT_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const MainController = {
  getPickedProduct,
  getBrandProduct,
};

export default MainController;
