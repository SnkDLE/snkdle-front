import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "../atoms";
import { Image } from "../organism";
import { Attempt, Character } from "../organism";
import { Winner } from "../organism";
import "../../aot-theme.css";

const ImagePage = () => {
  const [snkPersonal, setSnkPersonal] = useState(null);
  const [listeAttempts, setListeAttempts] = React.useState([]);
  const [attempt, setAttempt] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [isLooser, setIsLooser] = useState(false);

  // Récupération du personnage aléatoire
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://localhost/api/character/random-api",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
    <div className="aot-card" style={{marginTop:'2rem'}}>
      {snkPersonal ? (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Image.ImageFloue
            maxTentatives={10}
            imageUrl={snkPersonal?.data?.image?.split("/revision")[0]}
            children={attempt}
          />
          {!isLooser && !isWinner && (
            <Character.ListCharacter
              attempt={attempt}
              setAttempt={setAttempt}
              setListeAttempts={setListeAttempts}
              snkPersonal={snkPersonal}
              estClassique={false}
              setIsLooser={setIsLooser}
              setIsWinner={setIsWinner}
            />
          )}
          <Typography.Paragraph>Attempts: {attempt} / 12</Typography.Paragraph>
          <Attempt.ListeAttempt
            ListeAttempt={listeAttempts}
            attempt={attempt}
          />
          {isWinner && (
            <Winner.WinnerCharacter
              isLooser={isLooser}
              attempt={attempt}
              character={snkPersonal.data}
            />
          )}
          {isLooser && (
            <Winner.WinnerCharacter
              isLooser={isLooser}
              attempt={attempt}
              character={snkPersonal.data}
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImagePage;
