import { api } from "./api";
import { type Category } from "@/types/category";

export const categoriesService = {
  async getAll(): Promise<Category[]> {
    const { data } = await api.get("/categories");

    return data;
  },
};
