import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getSearchData = async (name: string) => {
  const brandList = await prisma.brand.findMany();
  const productList = await prisma.product.findMany();
  JSON.stringify(brandList);
  JSON.stringify(productList);

  const data: object = {"brands": brandList, "products": productList};

  return data;
};

const SearchService = {
    getSearchData,
};

export default SearchService;
