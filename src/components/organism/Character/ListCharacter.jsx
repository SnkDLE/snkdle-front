import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ListCharacter = ({
  attempt,
  setAttempt,
  setListeAttempts,
  snkPersonal,
  estClassique,
  setIsWinner,
  setIsLooser,
}) => {
  const [listeSnkPersonal, setListeSnkPersonal] = useState([]);
  const [perso, setPerso] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!perso.trim()) {
      setListeSnkPersonal([]);
      return;
    }

    const token = localStorage.getItem("auth_token");

    const timeoutId = setTimeout(() => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://localhost/api/character/search?name=" + perso,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          setListeSnkPersonal(response.data.data);
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

  // mode classique / daily
  const compareCharactersClassique = (character, snkPersonal) => {
    let ageColor = "";
    if (snkPersonal.data.age === character.age) {
      ageColor = "green";
    } else {
      ageColor = "red";
    }

    let genderColor = "";
    if (snkPersonal.data.gender === character.gender) {
      genderColor = "green";
    } else {
      genderColor = "red";
    }

    let status = "";
    if (snkPersonal.data.status === character.status) {
      status = "green";
    } else {
      status = "red";
    }

    const matches =
      character?.species?.filter((s) => snkPersonal.data?.species?.includes(s))
        .length || 0;
    const total = character?.species?.length || 0;
    const speciesColor =
      matches === 0 ? "red" : matches === total ? "green" : "orange";

    console.log(character);

    setListeAttempts((prevAttempt) => [
      {
        image: character?.image?.split("/revision")[0],
        age: character.age,
        ageColor: ageColor,
        gender: character.gender,
        genderColor: genderColor,
        status: character.status,
        statusColor: status,
        species: character.species.join(", "),
        speciesColor: speciesColor,
      },
      ...prevAttempt,
    ]);
    setIsWinner(snkPersonal.data.id === character.id);
  };

  // mode image
  const compareCharacters = (character, snkPersonal) => {
    console.log("compareCharacters", character, snkPersonal);
    let nameColor = "";
    if (snkPersonal.data.id === character.id) {
      nameColor = "green";
    } else {
      nameColor = "red";
    }

    setListeAttempts((prevAttempt) => [
      {
        image: character?.image?.split("/revision")[0],
        name: character.name,
        nameColor: nameColor,
      },
      ...prevAttempt,
    ]);

    setIsWinner(snkPersonal.data.id === character.id);
    if (attempt >= 11 && snkPersonal.data.id !== character.id) {
      setIsLooser(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <div>
      <input
        className="aot-input"
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
                src={character?.image?.split("/revision")[0]}
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
