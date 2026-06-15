import type { Author } from "@/types/author";
import "./MetaInfo.scss";

interface MetaInfoProps {
  articleAuthor: Author;
  publishedDate: string;
}

export function MetaInfo({ articleAuthor, publishedDate }: MetaInfoProps) {
  const displayDate = new Date(publishedDate).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <section className="article-meta-info">
      <img
        className="article-meta-info__author-photo"
        src={articleAuthor.profilePicture}
        alt={articleAuthor.name}
      />

      <div>
        <div className="article-meta-info__writer-info">
          <span>Written by: </span>

          <h2 className="article-meta-info__author-name">
            {articleAuthor.name}
          </h2>
        </div>

        <p className="article-meta-info__published-date">{displayDate}</p>
      </div>
    </section>
  );
}
