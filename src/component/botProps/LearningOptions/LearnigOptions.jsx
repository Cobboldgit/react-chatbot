import React from "react";

import "./learningOptions.css"

const LearnigOptions = (props) => {
  const options = [
    { text: "Javascript", handler: props.actionProvider.handleJavascriptList, id: 1 },
    { text: "ReactJs", handler: () => {}, id: 2 },
    { text: "APIS", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Inerview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-options-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearnigOptions;
