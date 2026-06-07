import { type Author } from "@/types/author";
import { api } from "./api";

export const authorsService = {
  async getAll(): Promise<Author[]> {
    const { data } = await api.get("/authors");

    return data;
  },
};
