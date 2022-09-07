import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../styles/DiaryUDBody.scss";
import DiaryUDListItem from "./DiaryUDListItem";

function DiaryUDBody({ articles, deleteDiary, updateDiary }) {
  const [showDiary, setShowDiary] = useState([]);

  const { id, title, text, reg_date } = showDiary;
  let myValues = Object.values(showDiary)[2];
  const [titlevalue, setTitleValue] = useState("");
  const [textvalue, setTextValue] = useState(myValues);

  const onChange = useCallback((e) => {
    setTitleValue(e.target.value);
  }, []);

  const onChange2 = useCallback((e) => {
    setTextValue(e.target.value);
  }, []);

  useEffect(() => {
    if (showDiary) {
      setTitleValue(showDiary.title);
      setTextValue(showDiary.text);
    }
  }, [showDiary]);

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
    <div className="DiaryUDBody">
      <div className="DiaryUDBodyLeft">
        <div className="Day">날짜</div>
        <ul className="DiaryList">
          {articles.map((article) => (
            <DiaryUDListItem
              article={article}
              key={article.id}
              onClickHandler={onDiaryItemClick}
              deleteDiary={deleteDiary}
              setTitleValue={setTitleValue}
              setTextValue={setTextValue}
              setShowDiary={setShowDiary}
            />
          ))}
        </ul>
      </div>
      <div className="DiaryUDBodyRight" updateDiary={updateDiary}>
        <form className="">
          <input
            className="UDtitle"
            name="title"
            type="text"
            maxlength="40"
            onChange={onChange}
            value={titlevalue}
          />
        </form>
        <button
          className="onClickUpdata"
          onClick={() => {
            updateDiary(id, titlevalue, textvalue);
          }}
        >
          수정
        </button>
        <textarea
          className="UDtext"
          type="text"
          name="text"
          cols="148"
          rows="45"
          onChange={onChange2}
          value={textvalue}
        ></textarea>
      </div>
    </div>
  );
}

export default DiaryUDBody;
