import { api } from "./api";
import { type Author } from "@/types/author";

export const authorsService = {
  async getAll(): Promise<Author[]> {
    const { data } = await api.get("/authors");

    return data;
  },
};
