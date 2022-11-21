import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { MainService } from "../service";

const getPickedProduct = async (req: Request, res: Response) => {
  try {
    const data = await MainService.getPickedProduct();
    console.log(data);
    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res
      .status(sc.CREATED)
      .send(success(sc.CREATED, rm.GET_PICKED_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const MainController = {
  getPickedProduct,
};

export default MainController;
