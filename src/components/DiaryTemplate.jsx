import "../styles/DiaryTemplate.scss";
import React, { useState } from "react";

function DiaryTemplate() {
  const [title, setTitle] = useState("");
  const [DiaryText, setDiaryText] = useState("");

  return (
    <div className="DiaryTemplateLeft">
      <div className="bookdot"></div>
      <div className="DiaryTemplateRight"></div>
    </div>
  );
}

export default DiaryTemplate;
