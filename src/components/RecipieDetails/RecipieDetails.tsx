import React from "react";
import styled from "styled-components";
import useAppDetails from "../../hooks/AssetDetailsHook";

const RecipiesSection = styled.section`
  border: 1px solid #ccc;
  border-radius: 3px;
  min-height: 80vh;
`;

const RecipieDetails: React.FC = () => {
  const { recipie } = useAppDetails();

  const lines = recipie.split("\n");

  return (
    <RecipiesSection>
      <h1>Recipie details</h1>
      {recipie.length > 0 &&
        lines.map((line, i) => {
          if (i === 0) {
            return <h1 key={i}>{line}</h1>;
          } else {
            if (line.split(" ").length === 2) {
              return <h3 key={i}>{line}</h3>;
            } else {
              return <p key={i}>{line}</p>;
            }
          }
        })}
    </RecipiesSection>
  );
};

export default RecipieDetails;
