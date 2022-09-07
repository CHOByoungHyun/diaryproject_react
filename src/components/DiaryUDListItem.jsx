import React from "react";
import "../styles/DiaryUDListItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DiaryUDListItem({
  article,
  onClickHandler,
  deleteDiary,
  setTitleValue,
  setTextValue,
  setShowDiary,
}) {
  // const [selectedDiary, setSelectedDiary] = useState(null);
  const { id, title, text, reg_date } = article;
  return (
    <div className="DiaryUDListItem">
      <a
        className="DiaryUD-A"
        href="#"
        onClick={() => {
          onClickHandler(id);
        }}
      >
        <div className="title ellipsis">제목: {title}</div>
        <div className="reg_date">날짜: {reg_date}</div>
      </a>
      <a
        className="Trash"
        onClick={() => {
          deleteDiary(id);
          setTitleValue("");
          setTextValue("");
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </a>
    </div>
  );
}

export default DiaryUDListItem;
