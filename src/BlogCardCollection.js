/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import ArticleCard from "./ArticleCard";

function BlogCardCollection({ articles }) {
  const [activeArticle, setActiveArticle] = useState();

  return (
    <div
      css={css`
        color: #fff;
        padding: 120px;
        background: rgb(107, 44, 131);
        background: linear-gradient(
          90deg,
          rgba(107, 44, 131, 1) 0%,
          rgba(21, 14, 67, 1) 59%
        );
        max-width: 1440px;
      `}
    >
      <div
        css={css`
          display: flex;
          padding-bottom: 25px;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          border-bottom: 1px solid #fff;
          margin-bottom: 50px;
        `}
      >
        <h1
          css={css`
            font-family: "Roboto Serif";
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 42px;
            letter-spacing: 0.33px;
          `}
        >
          Featured Articles
        </h1>
        <button
          css={css`
            border: 0;
            color: #fff;
            background-color: inherit;
            font-family: "Oswald";
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 3.33px;
          `}
        >
          VIEW ALL
        </button>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 90px;

          @media only screen and (min-width: 1101px) and (max-width: 1440px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 50px;
          }

          @media only screen and (max-width: 1100px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        {articles.map((article) => (
          <ArticleCard
            key={article.uuid}
            uuid={article.uuid}
            photo={article.photo}
            date={article.date}
            article={article.articleText}
            // instead of passing individual props we can also just pass the article as a single prop
            // e.g. article={article}
            setActiveArticle={setActiveArticle}
          />
        ))}
      </div>

      <div
        css={css`
          margin: 30px;
          border: 1px solid #fff;
          max-width: 1200px;
          color: #000;
          background-color: #fff;
          padding: 20px;
          font-size: 30px;
        `}
      >
        <h1
          css={css`
            margin-bottom: 40px;
          `}
        >
          Article Reader (This could also be a popup modal or new page.)
        </h1>
        <h1>Active Article UUID: {activeArticle}</h1>
        <p
          css={css`
            font-size: 30px;
          `}
        >
          Text:
          {activeArticle &&
            articles.find((article) => article.uuid === activeArticle)
              .articleText}
        </p>
      </div>
    </div>
  );
}

export default BlogCardCollection;
