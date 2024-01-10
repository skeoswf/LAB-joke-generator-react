import React, { useState } from 'react';

export default function Jokes() {
  const [buttonState, setButtonState] = useState(true);
  // const [joke, setJoke] = useState('');

  const handleClick = () => {
    setButtonState(!buttonState);

    console.warn(!buttonState);
  };

  return (
    <>
      <div id="jokeContainer">
        <h2>test</h2>
        { buttonState ? (
          <button type="button" onClick={handleClick}>get a fire joke</button>
        ) : (
          <button type="button" onClick={handleClick}>get a fire ass punchline</button>
        )}
      </div>
    </>
  );
}
