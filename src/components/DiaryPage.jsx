import React, { useState } from "react";
import "../styles/DiaryPage.scss";
import axios from "axios";

function DiaryPage() {
  const [DiaryText, setDiaryText] = useState({ title: "", text: "" });

  const { title, text } = DiaryText;
  const onInsert = async (title, text) => {
    const data = await axios({
      url: "http://localhost:4000/diary/create",
      method: "POST",
      data: { title, text },
    });
  };

  const DiaryChange = (e) => {
    const { name, value } = e.target;
    setDiaryText({ ...DiaryText, [name]: value });
    console.log(DiaryText);
  };

  // const getValue = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  //   console.log(values);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(DiaryText.title, DiaryText.text);
    setDiaryText({
      title: "",
      text: "",
    });
  };

  return (
    <div className="DiaryPage">
      <form className="">
        <input
          name="title"
          type="text"
          value={title}
          className="DiaryTitle"
          onChange={DiaryChange}
          placeholder="제목을 입력하세요"
        />
        <button onClick={onSubmit} className="onSubmitButton">
          등록
        </button>
      </form>
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
  );
}

export default DiaryPage;
