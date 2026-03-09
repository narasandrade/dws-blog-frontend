import { api } from "./api";
import { type Post } from "@/types/post";

export const postsService = {
  async getAll(): Promise<Post[]> {
    const { data } = await api.get("/posts");

    return data;
  },
};
