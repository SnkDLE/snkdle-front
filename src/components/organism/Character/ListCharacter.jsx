import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ListCharacter = ({
  attempt,
  setAttempt,
  setListeAttempts,
  snkPersonal,
  estClassique,
}) => {
  const [listeSnkPersonal, setListeSnkPersonal] = useState([]);
  const [perso, setPerso] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleInputChange = (e) => {
    setPerso(e.target.value);
    setShowDropdown(true);
  };

  const handleSelectCharacter = (character) => {
    setPerso("");
    setShowDropdown(false);
    setAttempt(attempt + 1);
    if (estClassique) {
      compareCharactersClassique(character, snkPersonal);
    } else {
      compareCharacters(character, snkPersonal);
    }
  };

  const compareCharactersClassique = (character, snkPersonal) => {
    let nameColor = "";
    if (snkPersonal.name === character.name) {
      nameColor = "green";
    } else {
      nameColor = "red";
    }

    let ageColor = "";
    if (snkPersonal.age === character.age) {
      ageColor = "green";
    } else {
      ageColor = "red";
    }

    let genderColor = "";
    if (snkPersonal.gender === character.gender) {
      genderColor = "green";
    } else {
      genderColor = "red";
    }

    setListeAttempts((prevAttempt) => [
      {
        img: character?.img?.split("/revision")[0],
        name: character.name,
        nameColor: nameColor,
        age: character.age,
        ageColor: ageColor,
        gender: character.gender,
        genderColor: genderColor,
      },
      ...prevAttempt,
    ]);
  };

  const compareCharacters = (character, snkPersonal) => {
    let nameColor = "";
    if (snkPersonal.name === character.name) {
      nameColor = "green";
    } else {
      nameColor = "red";
    }

    setListeAttempts((prevAttempt) => [
      {
        img: character?.img?.split("/revision")[0],
        name: character.name,
        nameColor: nameColor,
      },
      ...prevAttempt,
    ]);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

  return (
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
              onClick={() => handleSelectCharacter(character)}
            >
              <img
                src={character?.img?.split("/revision")[0]}
                alt={character.name}
                style={{ width: "50px", height: "50px" }}
              />
              {character.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCharacter;
