import React from 'react';
import styled from "styled-components";
import GridWrapper from "./components/GridWrapper";

// import './App.css';
// import Counter from "align-system-poc";

function App() {

    return (
        <GridSystem className="App">
            <GridWrapper />
            {/* <Counter /> */}
        </GridSystem>
    );
}

export default App;

const GridSystem = styled.div`
  background: #d3bcbc;
  width: 100vw;
  height: 100vh;
  color: white;
  // border: 1px solid black;
`;
