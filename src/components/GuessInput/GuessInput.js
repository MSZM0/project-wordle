import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [tempGuess, setTempGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("your guess:", { tempGuess });
    handleSubmitGuess(tempGuess);
    setTempGuess("");

  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        id="guess-input"
        type="text"
        value={tempGuess}
        onChange={(event) => {
          setTempGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
