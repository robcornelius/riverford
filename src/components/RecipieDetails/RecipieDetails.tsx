import React from "react";
import "../../styles/styles.css";
import styled from "styled-components";
import useAppDetails from "../../hooks/AssetDetailsHook";

const RecipiesSection = styled.section`
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 80vh;
  padding: 20px;
`;
const IngredientsList = styled.ul`
  margin: 0;
  padding: 0;
`;
const Ingredient = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
`;

const RecipieDetails: React.FC = () => {
  const { recipie } = useAppDetails();

  const lines = recipie.split("\n");

  const formatIngredients = (ingredientList: string): string[] => {
    const reg = new RegExp(/([0-9]+)/, "ig");
    const ingredients = ingredientList?.split(reg);
    const results = [];
    for (let x = 0; x < ingredients?.length; x++) {
      const y = x - 1;
      if (x % 2 === 0) {
        results.push(`${ingredients[y]}${ingredients[x]}`);
      }
    }
    results.shift();
    return results;
  };

  const ingredientsList = formatIngredients(lines[4]);

  const formatMethod = (method: string): string[] => {
    const lines = method?.split(/\./);
    const results = [];
    for (let x = 0; x < lines?.length; x++) {
      results.push(lines[x].trim());
    }
    return results;
  };

  const methodLines = formatMethod(lines[6]);

  return (
    <RecipiesSection>
      <h1 style={{ textAlign: "center" }}>Recipie details</h1>
      {recipie.length > 0 && (
        <>
          <h2>{lines[0]}</h2>
          <h3>{lines[1]}</h3>
          <p>{lines[2]}</p>
          <h3>{lines[3]}</h3>
          <IngredientsList>
            {lines[4] &&
              ingredientsList.map((ingredient: string, i: number) => {
                return <Ingredient key={i}>{ingredient}</Ingredient>;
              }, undefined)}
          </IngredientsList>
          <h3>{lines[5]}</h3>
          <>
            {lines[6] &&
              methodLines.map((line: string, i: number) => {
                return <p key={i}>{line}</p>;
              }, undefined)}
          </>
        </>
      )}
    </RecipiesSection>
  );
};

export default RecipieDetails;
