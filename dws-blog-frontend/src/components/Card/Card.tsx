import "./Card.scss";
import { Tag } from "@/components/Tag";
import placeholderPicture from "@/assets/card-placeholder-picture.png";

export function Card() {
  return (
    <article className="card">
      <header className="card__header">
        <figure>
          <img src={placeholderPicture} alt="Picture" />
          <figcaption>
            <span className="card__header__publication-date">Jan, 20 2024</span>
            <span className="dot" />
            <span className="card__header__author-lastname">
              Author Lastname
            </span>
          </figcaption>
        </figure>
      </header>

      <div className="card__content">
        <h3>
          This is the title of the article with two lines
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <footer className="card__footer">
        <Tag />
        <Tag />
      </footer>
    </article>
  );
}
