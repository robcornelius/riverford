import React from "react";
import styled from "styled-components";
import useAppDetails from "../../hooks/AssetDetailsHook";
import { getRecipie } from "../../api/api";

const List = styled.ul`
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0;
  margin-left: 30px;
`;

const ListElement = styled.li`
  list-style-type: none;
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const RecipieList: React.FC = () => {
  const { searchResults, setRecipie } = useAppDetails();

  const handleRecipieClick = async (ev: React.MouseEvent<HTMLLIElement>) => {
    const fileNameFromList = ev.currentTarget.getAttribute("data-filename");
    const fileName = await getRecipie(fileNameFromList || "");
    if (fileName) {
      setRecipie(fileName);
    }
  };

  return (
    <>
      <h2 style={{ margin: "10px 0 10px 30px" }}>Recipies</h2>
      <List>
        {searchResults.length > 0 &&
          searchResults.map((result, i) => {
            return (
              <ListElement
                key={i}
                data-filename={result.fileName}
                onClick={handleRecipieClick}
              >
                {result.fileName.split("-").join(" ")}
              </ListElement>
            );
          })}
      </List>
    </>
  );
};

export default RecipieList;
