import logo from "./logo.svg";
import "./App.css";
import GamePage from "./components/GamePage";
import ResultPage from "./components/ResultPage";
import StartPage from "./components/StartPage";
import { words } from "./words";
import { apiWord } from "./apiWord";

function App() {
  console.log(words);
  console.log(apiWord);
  return (
    <>
      <StartPage />
      <GamePage />
      <ResultPage />
    </>
  );
}

export default App;
