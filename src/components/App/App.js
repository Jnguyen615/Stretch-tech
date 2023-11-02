import "./App.css";
import GamePage from "../GamePage/GamePage";
import ResultPage from "../ResultPage/ResultPage";
import StartPage from "../StartPage/StartPage";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { apiWord } from "../../apiWord";
import { Routes, Route } from "react-router-dom";
import { getAllWordInfo } from "../../apiCalls";
import words from "../Data/wordBank";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllWordInfo } from "../../reducers/word";

// we want words = [{word: <word here>, audio: <url>}]

function App() {
  const dispatch = useDispatch();

  // function selectRandomWords() {
  //   const selectedWords = [];
  //   while (selectedWords.length < 10) {
  //     const randomIndex = Math.floor(Math.random() * 44);
  //     const randomWord = words[randomIndex];
  //     if (!selectedWords.includes(randomWord)) {
  //       selectedWords.push(randomWord);
  //     }
  //   }
  //   return selectedWords;
  // }

  // set state of words to words array
  async function fetchData() {
    try {
      // const selectedWords = selectRandomWords();

      const result = await getAllWordInfo(words);
      console.log(result);
// 
      dispatch(setAllWordInfo(result));

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/results" element={<ResultPage />}></Route>
        <Route path="*" element={<ErrorComponent />}></Route>
      </Routes>

    </>
  );
}

export default App;
