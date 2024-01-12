import React, { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Jokes() {
  const [buttonState, setButtonState] = useState(true);
  const [joke, setJoke] = useState('');

  const handleClick = () => {
    setButtonState(!buttonState);
    getJoke().then((newJokeValue) => {
      setJoke(newJokeValue);
    });

    console.warn(!buttonState);
  };

  return (
    <>
      <div id="jokeContainer">
        { buttonState ? (
          <>
            <button type="button" onClick={handleClick}>get a fire joke</button>
            <h2>{joke.delivery}</h2>
          </>
        ) : (
          <>
            <button type="button" onClick={handleClick}>get a fire ass punchline</button>
            <h2>{joke.setup}</h2>
          </>
        )}
      </div>
    </>
  );
}
