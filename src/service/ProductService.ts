import { ProductDetailResponseDTO } from "./../interfaces/ProductDetailResponseDTO";
import { ProductResponseDTO } from "./../interfaces/ProductResponseDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProductDetail = async () => {
    try {
        const productDetail = await prisma.product.findUnique({
            where: {
                id: 7,
            }
        });
        if(!productDetail) return null;
        const brand = await prisma.brand.findUnique({
            where: {
                id: productDetail.brand as number,
            }
        });

        const product: ProductDetailResponseDTO = {
            brandName: brand?.name as string,
            name: productDetail?.name as string,
            saledPrice: productDetail?.saledPrice as string,
            originalPrice: productDetail?.originalPrice as string,
            salePercent: productDetail?.salePercent as string,
            mainImg: productDetail?.mainImg as string,
            detailImg: productDetail?.detailImg as string,
            detailImgHeight: productDetail?.detailImgHeight as number,
            detailImgWidth: productDetail?.detailImgWidth as number,
            isLiked: productDetail?.isLiked as boolean,
            rate: productDetail?.rate as number,
            reviewCount: productDetail?.reviewCount as string,
        };

        const recommendProductList: ProductResponseDTO[] = [];
        const recommendProducts = [24, 25, 26];

        for (var i = 0; i < recommendProducts.length; i++) {
            const recommendProduct = await prisma.product.findUnique({
                where: {
                    id: recommendProducts[i],
                }
            });
            if (!recommendProduct) return null;
            const recommendBrand = await prisma.brand.findUnique({
                where: {
                    id: recommendProduct.brand as number,
                }
            });
            const recommendData = {
                brandName: recommendBrand?.name as string,
                mainImg: recommendProduct?.mainImg as string,
                name: recommendProduct?.name as string,
                saledPrice: recommendProduct?.saledPrice as string,
                salePercent: recommendProduct?.salePercent as string,
            };
            if (!recommendData) return null;
            recommendProductList.push(recommendData);
        }

        const similarProductList: ProductResponseDTO[] = [];
        const similarProducts = [27, 17, 28];

        for (var i = 0; i < similarProducts.length; i++){
            const similarProduct = await prisma.product.findUnique({
                where: {
                    id: similarProducts[i],
                }
            });
            if (!similarProduct) return null;
            const similarBrand = await prisma.brand.findUnique({
                where: {
                    id: similarProduct.brand as number,
                }
            });
            const similarData = {
                brandName: similarBrand?.name as string,
                mainImg: similarProduct?.mainImg as string,
                name: similarProduct?.name as string,
                saledPrice: similarProduct?.saledPrice as string,
                salePercent: similarProduct?.salePercent as string,
            };
            if (!similarData) return null;
            similarProductList.push(similarData);
        }
        return {"product": product, "recommends": recommendProductList, "similars": similarProductList};

    } catch (error) {
        console.log(error);
        throw error;
    }
};

const ProductService = {
  getProductDetail,
};

export default ProductService;
