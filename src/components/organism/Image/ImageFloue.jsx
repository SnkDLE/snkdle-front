import React from "react";
import { Container } from "../../atoms";
import { useState } from "react";

const ImageFloue = ({ children, maxTentatives = 10, imageUrl }) => {
  const [estIndice, setEstIndice] = useState(false);
  const tentatives = estIndice ? parseInt(children) || 0 : 0;
  const flouMax = 10;
  const flou = Math.max(0, flouMax - (tentatives * flouMax) / maxTentatives);

  return (
    <>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#1f2937",
        }}
      >
        Bouton Switch
      </h1>

      {/* Switch Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: !estIndice ? "#111827" : "#9ca3af",
          }}
        >
          {estIndice ? "Indice activé" : "Indice désactivé"}
        </span>

        <button
          onClick={() => setEstIndice(!estIndice)}
          style={{
            position: "relative",
            display: "inline-flex",
            height: "32px",
            width: "56px",
            alignItems: "center",
            borderRadius: "9999px",
            backgroundColor: estIndice ? "#2563eb" : "#d1d5db",
            transition: "background-color 0.3s ease",
            border: "none",
            cursor: "pointer",
            outline: "none",
          }}
          onFocus={(e) =>
            (e.target.style.boxShadow =
              "0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.1)")
          }
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        >
          <span
            style={{
              display: "inline-block",
              height: "24px",
              width: "24px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: "transform 0.3s ease",
              transform: estIndice ? "translateX(28px)" : "translateX(4px)",
            }}
          />
        </button>
      </div>

      {/* Image avec effet */}
      <div
        style={{
          backgroundColor: "white",
          padding: "16px",
          borderRadius: "8px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <img
          src={imageUrl}
          alt="Image test"
          style={{
            filter: `blur(${flou}px)`,
            transition: "filter 0.5s ease-in-out",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "6px",
          }}
        />
      </div>
    </>
  );
};

export default ImageFloue;
