import React, { useState } from "react";
import axios from "axios";
import "../styles/DiaryMainBody.scss";
import DiaryMainListItem from "./DiaryMainListItem";

function DiaryMainBody({ articles }) {
  const [showDiary, setShowDiary] = useState([]);
  const { id, title, text } = showDiary;

  function onDiaryItemClick(id) {
    console.log(id);
    const getSelectedDiary = async (id) => {
      const data = await axios({
        url: `http://localhost:4000/diary/${id}`,
        method: "GET",
      });
      console.log(data.data);
      setShowDiary(data.data);
    };
    getSelectedDiary(id);
  }

  return (
    <div className="DiaryMainBody">
      <div className="DiaryMainBodyLeft">
        <div className="Day">날짜</div>
        <ul className="DiaryList">
          {articles.map((article) => (
            <DiaryMainListItem
              article={article}
              key={article.id}
              onClickHandler={onDiaryItemClick}
            />
          ))}
        </ul>
      </div>
      <div className="DiaryMainBodyRight">
        <nav className="Title">{title}</nav>
        <nav className="Text">{text}</nav>
      </div>
    </div>
  );
}

export default DiaryMainBody;
