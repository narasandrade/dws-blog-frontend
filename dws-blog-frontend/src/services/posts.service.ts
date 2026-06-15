import { type Post } from "@/types/post";
import { api } from "./api";

export const postsService = {
  async getAll(): Promise<Post[]> {
    const { data } = await api.get("/posts");

    return data;
  },
  async getById(id: string): Promise<Post> {
    const { data } = await api.get(`/posts/${id}`);

    return data;
  },
};
