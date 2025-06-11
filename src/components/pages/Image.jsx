import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "../atoms";
import { Image } from "../organism";

const ImagePage = () => {
  const [snkPersonal, setSnkPersonal] = useState(null);
  const [listeSnkPersonal, setListeSnkPersonal] = useState([]);
  const [persoSelectionne, SetPersoSelectionne] = useState("");
  const [perso, setPerso] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const randomNumber = Math.floor(Math.random() * 202) + 1;

  useEffect(() => {
    if (!perso.trim()) {
      setListeSnkPersonal([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.attackontitanapi.com/characters?name=" + perso,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          setListeSnkPersonal(response.data.results);
          setShowDropdown(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [perso]);

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

  const handleInputChange = (e) => {
    setPerso(e.target.value);
    setShowDropdown(true);
  };

  const handleSelectCharacter = (characterName) => {
    SetPersoSelectionne(characterName);
    setPerso(characterName);
    setShowDropdown(false);
    setAttempt(attempt + 1);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

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
          <div>
            <input
              type="text"
              value={perso}
              onChange={handleInputChange}
              onFocus={() => perso && setShowDropdown(true)}
              onBlur={handleInputBlur}
              placeholder="Tapez le nom d'un personnage..."
            />

            {/* Dropdown des suggestions */}
            {showDropdown && listeSnkPersonal?.length > 0 && (
              <div>
                {listeSnkPersonal.map((character) => (
                  <div
                    key={character.id}
                    onClick={() => handleSelectCharacter(character.name)}
                  >
                    {character.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {persoSelectionne ? (
            <Typography.Paragraph>
              {snkPersonal.name.toLowerCase() === persoSelectionne.toLowerCase()
                ? "C'est bien " + persoSelectionne
                : "Ce n'est pas " + persoSelectionne}
            </Typography.Paragraph>
          ) : (
            <Typography.Paragraph>
              Veuillez entrer le nom d'un personnage pour vérifier.
            </Typography.Paragraph>
          )}

          <Typography.Paragraph>Tentatives: {attempt}</Typography.Paragraph>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container.Base>
  );
};

export default ImagePage;
