import "./App.css";
import GamePage from "../GamePage/GamePage";
import ResultPage from "../ResultPage/ResultPage";
import StartPage from "../StartPage/StartPage";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { Routes, Route } from "react-router-dom";
import { getAllWordInfo } from "../../apiCalls";
import words from "../Data/wordBank";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllWordInfo } from "../../reducers/word";

function App() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      const result = await getAllWordInfo(words);

      dispatch(setAllWordInfo(result));
    } catch (error) {
      setError(error);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        {error ? (
          <Route path="/" element={<ErrorComponent />}></Route>
        ) : (
          <Route path="/" element={<StartPage />}></Route>
        )}
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/results" element={<ResultPage />}></Route>
        <Route path="*" element={<ErrorComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
