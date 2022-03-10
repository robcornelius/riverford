import React from "react";
import { Col, Input, Button } from "antd";
import { getRecipies } from "../../api/api";
import useAppDetails from "../../hooks/AssetDetailsHook";

const Search: React.FC = () => {
  const { searchString, setSearchString, setSearchResults } = useAppDetails();

  const handleSearchTermInput: any = (
    ev: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setSearchString(ev.currentTarget.value);
  };
  const handleSearch = async () => {
    const recipiesList = await getRecipies(searchString);
    setSearchResults(recipiesList.recipies);
  };

  return (
    <>
      <Col span={14}>
        <h2>Search</h2>
        <Input placeholder="Search" onChange={handleSearchTermInput} />
      </Col>
      <Col span={4} style={{ textAlign: "right" }}>
        <Button onClick={handleSearch}>Search</Button>
      </Col>
    </>
  );
};

export default Search;
