import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "../api";

const customerProducts = () => useQuery<Product[]>(["customerProduct"], getProductsApi);

export default customerProducts;
