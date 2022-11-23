import { PrismaClient, Product } from "@prisma/client";
import { ProductResponseDTO } from "../interfaces/ProductResponseDTO";
import { SearchResponseDTO } from "../interfaces/SearchResponseDTO";
import { BrandResponseDTO } from "../interfaces/BrandResponseDTO";

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


//* 검색 결과 가져오기
const getSearchData = async () => {
  try {
    const searchedProductList: ProductResponseDTO[] = [];
    const searchedProducts = [7, 8, 9, 10, 16, 17, 18, 19, 20, 21, 22, 23];

    for (var i = 0; i < searchedProducts.length; i++) {
      const product = await prisma.product.findUnique({
        where: {
          id: searchedProducts[i]
        }
      searchedProductList.push(data);
    }

    const searchedBrandList: BrandResponseDTO[] = [];
    const searchedBrands = [9, 10, 11, 12, 13];

    for (var i = 0; i < searchedBrands.length; i++) {
      const brand = await prisma.brand.findUnique({
        where: {
          id: searchedBrands[i],
        }
      });

      if (!brand) return null;

      const data = {
        name: brand?.name as string,
        brandImg: brand?.brandImg as string,
      };

      if(!data) return null;

      searchedBrandList.push(data);
    }
    return {"brands": searchedBrandList, "products": searchedProductList};
     
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const SearchService = {
    getSearchData,
    getSearchMain,
};

export default SearchService;
