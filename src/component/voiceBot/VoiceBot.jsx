import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

import React from "react";

function VoiceBot() {
  useEffect(() => {
    alanBtn({
      key: "db46a0a675383d22d2a251900f4bb27f2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return <div></div>;
}

export default VoiceBot;
