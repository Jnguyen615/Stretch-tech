import "./App.css";
import GamePage from "../GamePage/GamePage";
import ResultPage from "../ResultPage/ResultPage";
import StartPage from "../StartPage/StartPage";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { apiWord } from "../../apiWord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/results" element={<ResultPage />}></Route>
        <Route path="*" element={<ErrorComponent />}></Route>
      </Routes>
    </main>
  );
}

export default App;
