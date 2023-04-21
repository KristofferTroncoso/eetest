/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import BlogCardCollection from "./BlogCardCollection";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3colored from "./assets/pic3-colored.jpg";

function App() {
  const [articles] = useState([
    {
      uuid: "8e419bcc-99ec-41d9-8025-0a5301b2f810",
      photo: pic3colored,
      date: "03.12.22",
      articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
    },
    {
      uuid: "ee0e2c04-efff-4f32-ac12-8e192ecb06fa",
      photo: pic1,
      date: "03.18.22",
      articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
    },
    {
      uuid: "dfc887a4-e07a-4055-9e78-4200bd9f8bd2",
      photo: pic2,
      date: "04.26.22",
      articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",
    },
  ]);

  return (
    <div className="App">
      <h1
        css={css`
          font-size: 50px;
        `}
      >
        Electric Enjin Component Test
      </h1>
      <p>Notes:</p>
      <ul>
        <li>responsive: 1-column, 2-column, and 3-column layout</li>
        <li>
          state: "active article" when clicked on "READ MORE" button. Sample
          article-reader at the bottom.
        </li>
        <li>
          hover: implemented the colored-image on hover feature only on the 1st
          image as an example since it was the only colored image provided. it's
          only a css hover effect, however, i can also store the currently
          hovered article as state if needed.
        </li>
      </ul>
      <div
        css={css`
          padding: 10px;
        `}
      >
        <BlogCardCollection articles={articles} />
      </div>
    </div>
  );
}

export default App;
