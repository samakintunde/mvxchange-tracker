import React from "react";
import "./App.css";
import { Header, SearchForm, Sidebar } from "./components";
import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 4fr 7fr;
`;

function App() {
  const handleSearchFormSubmit = (e) => {};

  return (
    <div>
      <Header />
      <StyledMain>
        <Sidebar handleSearchFormSubmit={handleSearchFormSubmit} />
        <div></div>
        {/* <SearchForm /> */}
      </StyledMain>
    </div>
  );
}

export default App;
