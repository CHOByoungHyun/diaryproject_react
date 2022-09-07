import React, { useState } from "react";
import "../styles/DiaryCreateBody.scss";
import DiaryCreateListItem from "./DiaryCreateListItem";

function DiaryCreateBody({ onInsert, articles }) {
  const [DiaryText, setDiaryText] = useState({ title: "", text: "" });

  const { title, text } = DiaryText;

  const DiaryChange = (e) => {
    const { name, value } = e.target;
    setDiaryText({ ...DiaryText, [name]: value });
    console.log(DiaryText);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(DiaryText.title, DiaryText.text);
    setDiaryText({
      title: "",
      text: "",
    });
  };

  return (
    <div className="DiaryCreateBody">
      <div className="DiaryCreateBodyLeft">
        <div className="Day">날짜</div>
        <div className="DiaryList">
          {articles.map((diaryArticle) => (
            <DiaryCreateListItem
              diaryArticle={diaryArticle}
              key={diaryArticle.id}
              // onClickHandler={onDiaryItemClick}
            />
          ))}
        </div>
      </div>

      {/* --------------------------------------------- */}
      <div className="DiaryCreateBodyRight">
        <form className="">
          <input
            name="title"
            type="text"
            value={title}
            maxlength="40"
            className="DiaryTitle"
            onChange={DiaryChange}
            placeholder="제목을 입력하세요"
          />
        </form>
        <button onClick={onSubmit} className="onSubmitButton">
          등록
        </button>
        <textarea
          spellCheck="true"
          onChange={DiaryChange}
          value={text}
          className="DiaryText"
          name="text"
          id=""
          cols="148"
          rows="45"
          placeholder="내용입력창"
        ></textarea>
      </div>
    </div>
  );
}

export default DiaryCreateBody;
