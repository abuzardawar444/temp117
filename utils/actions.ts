"use server";
import db from "@/utils/db";

export const fetchFeaturedProducts = async () => {
  return await db.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  console.log("Search query:", search);
  return [];
};

export const fetchSingleProduct = async (productId: string) => {
  console.log(productId);
  return {
    name: "",
    image: "",
    price: 0,
    description: "",
    company: "",
    featured: false,
    id: "",
  } as const;
};
