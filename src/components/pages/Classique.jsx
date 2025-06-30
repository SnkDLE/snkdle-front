import React from "react";
import { Container, Typography } from "../atoms";
import { Explainer } from "../molecules";
import { Attempt, Character, Winner } from "../organism";
import axios from "axios";
import { useEffect, useState } from "react";

const Classique = () => {
  const [attempt, setAttempt] = React.useState(0);
  const [listeAttempts, setListeAttempts] = React.useState([]);
  const [snkPersonal, setSnkPersonal] = useState(null);
  const [isWinner, setIsWinner] = useState(false);
  const randomNumber = Math.floor(Math.random() * 202) + 1;

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.attackontitanapi.com/characters/" + randomNumber,
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        setSnkPersonal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container.Base>
      <Explainer.ExplainClassique />
      {!isWinner && (
        <Character.ListCharacter
          attempt={attempt}
          setAttempt={setAttempt}
          setListeAttempts={setListeAttempts}
          snkPersonal={snkPersonal}
          estClassique={true}
          setIsWinner={setIsWinner}
        />
      )}
      <Attempt.ListeAttemptClassique
        ListeAttempt={listeAttempts}
        attempt={attempt}
      />
      {isWinner && (
        <Winner.WinnerCharacter attempt={attempt} Character={snkPersonal} />
      )}
    </Container.Base>
  );
};

export default Classique;
