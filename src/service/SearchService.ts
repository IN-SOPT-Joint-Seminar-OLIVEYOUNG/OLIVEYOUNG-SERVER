import { PrismaClient, Product } from "@prisma/client";
import { ProductResponseDTO } from "../interfaces/ProductResponseDTO";
import { SearchResponseDTO } from "../interfaces/SearchResponseDTO";
const prisma = new PrismaClient();

//* 메인 검색 화면
const getSearchMain = async (): Promise<SearchResponseDTO | null> => {
  try {
    const productList: ProductResponseDTO[] = [];

    const recentWordList: string[] = [];
    const recentWords = await prisma.recentWord.findMany();
    recentWords.map((recentWord) => {
      recentWordList.push(recentWord.word as string);
    });

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

      productList.push(data);
    }

    const searchMainData: SearchResponseDTO = {
      recentWords: recentWordList as string[],
      products: productList as ProductResponseDTO[],
    };

    return searchMainData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const SearchService = {
  getSearchMain,
};

export default SearchService;
