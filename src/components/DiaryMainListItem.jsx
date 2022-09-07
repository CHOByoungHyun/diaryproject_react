import React from "react";
import "../styles/DiaryMainListItem.scss";

function DiaryMainListItem({ article, onClickHandler }) {
  // const [selectedDiary, setSelectedDiary] = useState(null);
  const { id, title, text, reg_date } = article;
  return (
    <div className="DiaryMainListItem">
      <a
        className="DiaryMain-A"
        href="#"
        onClick={() => {
          onClickHandler(id);
        }}
      >
        <div className="title ellipsis">제목: {title}</div>
        <div className="reg_date">날짜: {reg_date}</div>
      </a>
    </div>
  );
}

export default DiaryMainListItem;
