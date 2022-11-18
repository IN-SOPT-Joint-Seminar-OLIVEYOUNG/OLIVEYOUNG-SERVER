import { ProductResponseDTO } from "./../interfaces/ProductResponseDTO";
import { PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

//* 추천 상품 조회
const getPickedProduct = async (): Promise<ProductResponseDTO[] | null> => {
  try {
    const pickedProductList: ProductResponseDTO[] = [];
    const picks = [1, 2, 3];

    for (var i = 1; i <= 3; i++) {
      const product = await prisma.product.findUnique({
        where: {
          id: i,
        },
      });

      if (!product) return null;

      const brand = await prisma.brand.findUnique({
        where: {
          id: product.brand as number,
        },
      });

      const data = {
        brandName: brand?.name as string,
        mainImg: product?.mainImg as string,
        name: product?.name as string,
        saledPrice: product?.saledPrice as string,
        salePercent: product?.salePercent as string,
      };

      if (!data) return null;

      pickedProductList.push(data);
    }

    return pickedProductList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const MainService = {
  getPickedProduct,
};

export default MainService;
