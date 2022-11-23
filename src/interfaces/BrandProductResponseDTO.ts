import { ProductResponseDTO } from "./ProductResponseDTO";

export interface BrandProductResponseDTO {
  name: string | null;
  brandImg: string | null;
  products: ProductResponseDTO[] | null;
}
