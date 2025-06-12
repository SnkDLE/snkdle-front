import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "../atoms";
import { Image } from "../organism";
import { Attempt, Character } from "../organism";

const ImagePage = () => {
  const [snkPersonal, setSnkPersonal] = useState(null);
  const [listeAttempts, setListeAttempts] = React.useState([]);
  const [attempt, setAttempt] = useState(0);
  const randomNumber = Math.floor(Math.random() * 202) + 1;

  // Récupération du personnage aléatoire
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
      {snkPersonal ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f9fafb",
          }}
        >
          <Typography.Title>
            {snkPersonal ? snkPersonal.name : "Loading character..."}
          </Typography.Title>
          <Image.ImageFloue
            maxTentatives={10}
            imageUrl={snkPersonal?.img?.split("/revision")[0]}
            children={attempt}
          />
          <Character.ListCharacter
            attempt={attempt}
            setAttempt={setAttempt}
            setListeAttempts={setListeAttempts}
            snkPersonal={snkPersonal}
            estClassique={false}
          />
          <Attempt.ListeAttempt
            ListeAttempt={listeAttempts}
            attempt={attempt}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container.Base>
  );
};

export default ImagePage;
