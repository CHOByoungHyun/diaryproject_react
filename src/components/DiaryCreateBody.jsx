import React from "react";
import "../styles/DiaryCreateBody.scss";
import DiaryPage from "./DiaryPage";
import DiaryListItem from "./DiaryListItem";

function DiaryBody() {
  return (
    <div className="DiaryBody">
      <div className="DiaryBodyLeft">
        날짜<DiaryListItem></DiaryListItem>
      </div>
      <div className="DiaryBodyRight">
        <DiaryPage></DiaryPage>
      </div>
    </div>
  );
}

export default DiaryBody;
