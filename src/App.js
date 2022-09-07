import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DiaryCreateBody from "./components/DiaryCreateBody.jsx";
import DiaryMainBody from "./components/DiaryMainBody.jsx";
import DiaryUDBody from "./components/DiaryUDBody.jsx";

import axios from "axios";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [Diaryarticle, setDiaryArticle] = useState("");
  const [selectedArticle, setSelectedArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000",
          method: "GET",
        });

        setArticles(data.data);
        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };
    console.log(articles);
    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  // const StyledLink = style(NavLink)`
  //   color: rgb(166, 227, 233);
  //   background-color: rgb(255, 255, 255);
  //   border: 1px solid rgb(255, 255, 255);
  // `;

  const onInsert = async (title, text) => {
    const data = await axios({
      url: "http://localhost:4000/diary/create",
      method: "POST",
      data: { title, text },
    });
    setArticles(data.data);
  };

  const deleteDiary = async (id) => {
    console.log("deletdDiary 실행");
    const data = await axios({
      url: `http://localhost:4000/diary/delete/${id}`,
      method: "DELETE",
    });
    setArticles(data.data);
  };

  const updateDiary = async (id, title, text) => {
    const data = await axios({
      url: `http://localhost:4000/diary/update/${id}`,
      method: "PATCH",
      params: { title, text },
    });
    setArticles(data.data);
  };

  return (
    <div className="DiaryTemplateLeft">
      <div className="bookdot"></div>
      <div className="DiaryTemplateRight">
        <BrowserRouter>
          <nav>
            <NavLink
              to="/"
              className={"mi-1"}
              style={({ isActive }) => ({
                color: isActive ? "#a6e3e9" : "white",
                backgroundColor: isActive ? "white" : "#a6e3e9",
              })}
            >
              메뉴
            </NavLink>
            <NavLink
              to="/new"
              className={"mi-2"}
              style={({ isActive }) => ({
                color: isActive ? "#a6e3e9" : "white",
                backgroundColor: isActive ? "white" : "#a6e3e9",
              })}
            >
              쓰기
            </NavLink>
            <NavLink
              to="/UD"
              className={"mi-3"}
              style={({ isActive }) => ({
                color: isActive ? "#a6e3e9" : "white",
                backgroundColor: isActive ? "white" : "#a6e3e9",
              })}
            >
              관리
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<DiaryMainBody articles={articles} />} />

            <Route
              path="/new"
              element={
                <DiaryCreateBody onInsert={onInsert} articles={articles} />
              }
            />
            <Route
              path="/UD"
              element={
                <DiaryUDBody
                  onInsert={onInsert}
                  articles={articles}
                  deleteDiary={deleteDiary}
                  updateDiary={updateDiary}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
