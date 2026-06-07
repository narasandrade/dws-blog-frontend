import { type Category } from "@/types/category";
import { api } from "./api";

export const categoriesService = {
  async getAll(): Promise<Category[]> {
    const { data } = await api.get("/categories");

    return data;
  },
};
