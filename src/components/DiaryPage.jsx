// import React, { useState } from "react";
// import "../styles/DiaryPage.scss";
// import axios from "axios";

// function DiaryPage() {
//   const [DiaryText, setDiaryText] = useState({ title: "", text: "" });

//   const  { title, text } = DiaryText;

//   const DiaryChange = (e) => {
//     const { name, value } = e.target;
//     setDiaryText({ ...DiaryText, [name]: value });
//     console.log(DiaryText);
//   };

// const getValue = (e) => {
//   const { name, value } = e.target;
//   setValues({
//     ...values,
//     [name]: value,
//   });
//   console.log(values);
// };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     onInsert(DiaryText.title, DiaryText.text);
//     setDiaryText({
//       title: "",
//       text: "",
//     });
//   };

//   return (
//     <div className="DiaryPage">

//     </div>
//   );
// }

// export default DiaryPage;
