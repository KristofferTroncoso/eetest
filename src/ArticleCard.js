/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ArticleCard({ uuid, photo, date, article, setActiveArticle }) {
  return (
    <article
      css={css`
        background-color: #000000;
        color: #ffffff;
        height: 457px;
        min-width: 320px;
        max-width: 420px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: auto;

        :hover {
          img {
            filter: grayscale(0);
          }
        }
      `}
    >
      <div>
        <img
          css={css`
            height: 269px;
            width: 100%;
            object-fit: cover;
            border-radius: 8px 8px 0 0;
            filter: grayscale(100%);
          `}
          src={photo}
          alt={photo}
        />
      </div>
      <div
        css={css`
          padding: 15px;
          height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <p
          css={css`
            font-family: "Oswald", sans-serif;
            font-weight: 300;
            font-size: 12px;
          `}
        >
          {date}
        </p>
        <p
          css={css`
            font-family: "Roboto Serif", serif;
            font-weight: 300;
            font-size: 20px;
            line-height: 152%;
          `}
        >
          {article}
        </p>
        <div>
          <button
            css={css`
              color: #00e1ff;
              border: none;
              background-color: inherit;
              font-family: "Oswald", sans-serif;
              font-weight: 300;
              font-size: 14px;
              margin: 0;
              padding: 2px 20px 2px 0;
            `}
            onClick={(e) => setActiveArticle(uuid)}
          >
            READ MORE
          </button>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
