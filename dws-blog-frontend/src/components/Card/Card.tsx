import { memo } from "react";
import "./Card.scss";
import { Tag } from "@/components/Tag";
import placeholderPicture from "@/assets/card-placeholder-picture.png";
import type { Post } from "@/types/post";

interface CardProps {
  post: Post;
}

export const Card = memo(function Card({ post }: CardProps) {
  const publicationDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const authorLastName = post.author.name.split(" ").slice(-1)[0];

  return (
    <article className="card">
      <header className="card__header">
        <figure>
          <img
            src={post.thumbnail_url || placeholderPicture}
            alt={post.title}
          />

          <figcaption>
            <span className="card__header__publication-date">
              {publicationDate}
            </span>

            <span className="dot" />

            <span className="card__header__author-lastname">
              {authorLastName}
            </span>
          </figcaption>
        </figure>
      </header>

      <div className="card__content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>

      <footer className="card__footer">
        {post.categories.map((category) => (
          <Tag key={category.id} label={category.name} />
        ))}
      </footer>
    </article>
  );
});
