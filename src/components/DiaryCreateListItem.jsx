import React from "react";
import "../styles/DiaryCreateListItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DiaryCreateListItem({ diaryArticle }) {
  // const [selectedDiary, setSelectedDiary] = useState(null);
  const { id, title, text, reg_date } = diaryArticle;
  return (
    <li className="DiaryCreateListItem">
      <a
        className="DiaryCreate-A ellipsis"
        href="#"
        onClick={() => {
          // onClickHandler(id);
        }}
      >
        제목: {title} <br />
        날짜: {reg_date}
      </a>
      {/* <a className="Trash"> <FontAwesomeIcon icon={faTrash} /> </a> */}
    </li>
  );
}

export default DiaryCreateListItem;
