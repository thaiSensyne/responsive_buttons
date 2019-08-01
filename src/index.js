import React from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/core";

const concerns = [
  "- No Concern -",
  "Airway compromise",
  "Bleeding/Melaena",
  "Pallor or Cyanosis",
  "New Facial/limb weakness",
  "Diarrhoea/vomiting",
  "Unresolved Pain",
  "Abnormal Electrolyte/BG",
  "Self (HR > BP)",
  "Infection?",
  "Non-specific concern",
  "Really really really really long nurse concern concern 1",
  "Really really really really long nurse concern concern 2",
];

function calcFontSize(textLength) {
  if(textLength < 54) {
    return 16;
  }
  return 14;
}

const containerStyles = css`
  position: relative;
  height: 100vh;
  background-color: #E6EBEB;
  display: grid;
  grid-template-rows: calc(100vh - 60px) 60px;
  width: 50%;
`;

const flexContainerStyles = css`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1;
`;

const buttonStyles = props => css`
  color: #555555;
  background-color: ${props.background};
  font-weight: 400;
  border-radius: 20px;
  margin-bottom: 4px;
  &:hover {
    cursor: pointer;
  }
  margin-top: 4px;
  border: none;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  margin-left: 16px;
  margin-right: 16px;
  flex: 0 1 40px;
  font-size: ${props.fontSize}px;
`

function Button({ label, background, fontSize }) {
  return (
    <button css={buttonStyles({ background, fontSize })}>{label}</button>
  )
}

const saveStyles = props => css`
  color: #FFFFFF;
  background-color: ${props.background};
  font-weight: 400;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  border: none;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  width: calc(100% - 32px);
  grid-column: 1;
  grid-row: 2;
  min-height: 40px;
`;

const saveContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 16px;
`;

function Save({ background, children }) {
  return (
    <button css={saveStyles({ background })}>{children}</button>
  )
}

class App extends React.Component {
  render() {
    return (
      <div css={containerStyles}>
        <div css={flexContainerStyles}>
          {concerns.map(concern => {
            return <Button background="#FFFFFF" fontSize={calcFontSize(concern.length)} key={concern} label={concern} />
          })} 
        </div>
        <div css={saveContainer}>
          <Save background="#0CA9F4">Save Observations</Save>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);