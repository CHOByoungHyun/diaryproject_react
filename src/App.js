import React, { useRef, useState, useEffect } from "react";
import DiaryTemplate from "./components/DiaryTemplate";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DiaryCreateBody from "./components/DiaryCreateBody.jsx";
import DiaryMainBody from "./components/DiaryMainBody.jsx";
import DiaryList from "./components/DiaryList";
import DiaryPage from "./components/DiaryPage";
import axios from "axios";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");
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

  const onInsert = async (DiaryText) => {
    const data = await axios({
      url: "http://localhost:4000/diary/create",
      method: "POST",
      data: { title: DiaryText.title, text: DiaryText.text },
    });
  };

  // const StyledLink = style(NavLink)`
  //   color: rgb(166, 227, 233);
  //   background-color: rgb(255, 255, 255);
  //   border: 1px solid rgb(255, 255, 255);
  // `;

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
          </nav>
          <Routes>
            <Route path="/" element={<DiaryMainBody />} />

            <Route path="/new" element={<DiaryCreateBody />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
