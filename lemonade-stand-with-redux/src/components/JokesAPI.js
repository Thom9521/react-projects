import React, { useState, useEffect } from "react";

import axios from "axios";

import Joke from "./Joke";

// Importér Reactstrap komponenter
import { Container } from "reactstrap";

const JokesAPI = () => {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    const fetchJokes = async () => {
      const result = await axios(
        `https://official-joke-api.appspot.com/random_joke`
      );
      setJoke(result.data);
      console.log(result.data);
    };
    fetchJokes();
  }, []);

  return (
    <Container>
      <Joke joke={joke} />
    </Container>
  );
};
export default JokesAPI;
