import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSumbmitGuess(guess){
  console.log("new guess: ", guess)  
  setGuesses([...guesses, guess]);  
  }

  return (
    <>
      <PreviousGuess guesses={guesses}/>
      <GuessInput handleSubmitGuess={handleSumbmitGuess} />
    </>
  );
}

export default Game;
