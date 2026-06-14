import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "@/components";
import { usePost } from "@/hooks/usePost";
import "./PostDetails.scss";

export function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const { post } = usePost(id!);

  const navigate = useNavigate();

  return (
    <>
      <aside>
        <BackButton onClick={() => navigate(-1)} />
      </aside>

      <section className="post-details__content">
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
      </section>
    </>
  );
}
