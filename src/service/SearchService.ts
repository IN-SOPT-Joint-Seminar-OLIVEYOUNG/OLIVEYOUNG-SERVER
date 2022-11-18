import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getSearchData = async (name: string) => {
  const data = await prisma.product.findMany()
  return data;
};

const SearchService = {
    getSearchData,
};

export default SearchService;
