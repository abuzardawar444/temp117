"use server";

import db from "@/utils/db";
// if we cannot find any matching product, we want the user to be redirected to the homepage
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  console.log("hello from fetchFeaturedProducts");
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  console.log("hello from fetchAllProducts", search);
};

export const fetchSingleProduct = async (productId: string) => {
  console.log("hello from fetchSingleProduct", productId);
};
