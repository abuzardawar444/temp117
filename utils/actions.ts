"use server";

import db from "@/utils/db";
// if we cannot find any matching product, we want the user to be redirected to the homepage
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  console.log("Fetching featured products");
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  console.log("Search query:", search);
  return {};
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
