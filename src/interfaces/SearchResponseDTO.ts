import { ProductResponseDTO } from "./ProductResponseDTO";
export interface SearchResponseDTO {
  recentWords: string[];
  products: ProductResponseDTO[];
}
