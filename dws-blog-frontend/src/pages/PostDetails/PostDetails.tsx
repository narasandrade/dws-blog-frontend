import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "@/components";
import { usePost } from "@/hooks/usePost";
import { MetaInfo } from "./MetaInfo";
import { LastArticles } from "./LastArticles/LastArticles";
import "./PostDetails.scss";

export function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading, error } = usePost(id!);

  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error loading post: {error.message}</p>;
  }

  return (
    <div className="post-details">
      <aside>
        <BackButton onClick={() => navigate(-1)} />
      </aside>

      {post && (
        <section className="post-details__article">
          <h1 className="post-details__article-title">{post?.title}</h1>

          <MetaInfo
            articleAuthor={post.author}
            publishedDate={post.createdAt}
          />

          <img
            className="post-details__article-thumbnail"
            src={post.thumbnail_url}
            alt={post.title}
          />

          <p className="post-details__article-content">{post.content}</p>

          <LastArticles />
        </section>
      )}
    </div>
  );
}
