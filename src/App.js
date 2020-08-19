import React, { useState } from "react";
import "./App.css";
import { Header, Map, Sidebar } from "./components";
import styled from "styled-components";
import { trackersData } from "./data/trackers";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 4fr 7fr;
  overflow: hidden;
`;

function App() {
  const [trackers, setTrackers] = useState(trackersData);
  const [activeTracker, setActiveTracker] = useState(null);

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;

    if (!query) return setTrackers(trackersData);

    const matches = trackersData.filter((tracker) => {
      return tracker.title.match(query) || tracker.shipmentId.match(query);
    });

    setTrackers(matches);
  };

  return (
    <div>
      <Header />
      <StyledMain>
        <Sidebar
          handleSearchFormSubmit={handleSearchFormSubmit}
          trackers={trackers}
          activeTracker={activeTracker}
          setActiveTracker={setActiveTracker}
        />
        <div>
          <Map
            trackers={trackers}
            activeTracker={activeTracker}
            setActiveTracker={setActiveTracker}
          />
        </div>
      </StyledMain>
    </div>
  );
}

export default App;
