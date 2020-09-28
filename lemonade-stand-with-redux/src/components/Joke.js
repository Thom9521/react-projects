import React from "react";

const Joke = ({ joke }) => {
  return (
    <section>
      <div>
        <h1 className="mb-5">Jokes from the duck 🦆</h1>
        <h2 className="mt-5">{joke.setup}</h2>
        <h2>- {joke.punchline}</h2>

        <h3 className="mt-5">🤦‍♂️</h3>
      </div>
    </section>
  );
};

export default Joke;
