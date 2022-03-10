import React from "react";
import styled from "styled-components";
import useAppDetails from "../../hooks/AssetDetailsHook";
import { getRecipie } from "../../api/api";
import { recipieObj } from "../../contexts/AppDetailsContext";

const List = styled.ul`
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0;
  margin-left: 30px;
  min-height: 73vh;
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

  const getDisplayName = (fileName: string | undefined) => {
    if (fileName && fileName.indexOf("-")) {
      return fileName.split("-").join(" ");
    }
    return fileName;
  };

  return (
    <>
      <h2 style={{ margin: "10px 0 10px 30px" }}>Recipies</h2>
      <ul>
        {searchResults.length > 0 &&
          searchResults.map((result, i) => {
            console.log(result.fileName);
            return (
              <li
                key={i}
                data-filename={result.fileName}
                onClick={handleRecipieClick}
              >
                {getDisplayName(result.fileName)}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RecipieList;
