import React from "react";
import styled from "styled-components";
import useAppDetails from "../../hooks/AssetDetailsHook";
import { getRecipie } from "../../api/api";

const List = styled.ul`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0;
  width: 95%;
  min-height: 50vh;
`;

const ListElement = styled.li`
  list-style-type: none;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;

const RecipieList: React.FC = () => {
  const { searchResults, setRecipie } = useAppDetails();

  const handleRecipieClick = async (ev: React.MouseEvent<HTMLLIElement>) => {
    const fileNameFromList = ev.currentTarget.getAttribute("data-filename");
    const fileName = await getRecipie(fileNameFromList || "");
    setRecipie(fileName || "");
  };

  const getDisplayName = (fileName: string | undefined) => {
    if (fileName && fileName.indexOf("-")) {
      return fileName.split("-").join(" ");
    }
    return fileName;
  };

  return (
    <>
      <h2 style={{ margin: "20px 0" }}>Matching Recipies</h2>
      <List>
        {searchResults.length > 0 &&
          searchResults.map((result, i) => {
            return (
              <ListElement
                key={i}
                data-filename={result.fileName}
                onClick={handleRecipieClick}
              >
                {getDisplayName(result.fileName)}
              </ListElement>
            );
          })}
      </List>
    </>
  );
};

export default RecipieList;
