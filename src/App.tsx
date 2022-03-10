import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./styles/styles.css";
import AppContext from "./contexts/AppDetailsContext";
import Search from "./components/search/search";
import RecipieList from "./components/recipieList/recipieList";
import RecipieDetails from "./components/RecipieDetails/RecipieDetails";

function App() {
  return (
    <AppContext>
      <div className="App">
        <header style={{ marginLeft: "30px" }}>
          <h1>Riverford Recipies Search</h1>
          <p>
            Here at Riverford we have hundreds of recipies to complement our
            fantastic produce. You can use this tool to give you some great
            ideas.
          </p>
        </header>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <Row align="bottom" justify="space-around">
              <Search />
              <RecipieList />
            </Row>
          </Col>
          <Col className="gutter-row" span={16}>
            <RecipieDetails />
          </Col>
        </Row>
      </div>
    </AppContext>
  );
}

export default App;
