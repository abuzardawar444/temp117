"use server";

import db from "@/utils/db";
// if we cannot find any matching product, we want the user to be redirected to the homepage
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      // We get the products where the featured flag is set to true
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    // We have two options, we have the entire product or it is going to be null
    where: {
      id: productId,
    },
  });
  // If there is no matching product, then we want to redirect the user
  if (!product) redirect("/products");
  return product;
};
