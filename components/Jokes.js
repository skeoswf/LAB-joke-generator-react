import React, { useState } from 'react';

export default function Jokes() {
  const [buttonState, setButtonState] = useState(true);

  const handleClick = () => {
    setButtonState(!buttonState);

    console.warn(!buttonState);
  };

  return (
    <>
      <div id="jokeContainer">
        { buttonState ? (
          <button type="button" onClick={handleClick}>get a fire joke</button>
        ) : (
          <button type="button" onClick={handleClick}>get a fire ass punchline</button>
        )}
      </div>
    </>
  );
}
