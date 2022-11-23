import { ProductResponseDTO } from "./../interfaces/ProductResponseDTO";
import { PrismaClient, Product } from "@prisma/client";
import { BrandProductResponseDTO } from "../interfaces/BrandProductResponseDTO";
const prisma = new PrismaClient();

//* 추천 상품 조회
const getPickedProduct = async (): Promise<ProductResponseDTO[] | null> => {
  try {
    const pickedProductList: ProductResponseDTO[] = [];

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

//* 브랜드 별 상품 조회
const getBrandProduct = async (): Promise<BrandProductResponseDTO[] | null> => {
  try {
    const brandProductList: BrandProductResponseDTO[] | null = [];

    for (var i = 4; i <= 8; i++) {
      const productList: ProductResponseDTO[] = [];
      const brand = await prisma.brand.findFirst({
        where: {
          id: i,
        },
      });

      const products = await prisma.product.findMany({
        where: {
          brand: brand?.id,
        },
      });

      products.map((product) => {
        const productData = {
          brandName: brand?.name as string,
          mainImg: product?.mainImg as string,
          name: product?.name as string,
          saledPrice: product?.saledPrice as string,
          salePercent: product?.salePercent as string,
        };
        productList.push(productData);
      });

      const brandProductData = {
        name: brand?.name as string,
        brandImg: brand?.brandImg as string,
        products: productList as ProductResponseDTO[],
      };

      brandProductList.push(brandProductData);
    }
    return brandProductList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const MainService = {
  getPickedProduct,
  getBrandProduct,
};

export default MainService;
