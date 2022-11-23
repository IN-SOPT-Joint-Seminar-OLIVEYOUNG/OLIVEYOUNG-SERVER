import { success } from "./../constants/response";
import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail } from "../constants/response";
import { ProductService } from "../service";

const getProductDetail = async (req: Request, res: Response) => {
  const productId = req.params;
  try {
    const data = await ProductService.getProductDetail();
    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_PRODUCT_DETAIL_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const putProductIsLike = async (req: Request, res: Response) => {
  const productId = req.params;
  try {
    const data = await ProductService.putProductIsLike();
    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.LIKE_SUCCESS, data));
  } catch (error) {
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
  
};

const ProductController = {
    getProductDetail,
    putProductIsLike,
};

export default ProductController;
