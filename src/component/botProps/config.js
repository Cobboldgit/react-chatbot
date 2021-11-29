import { createChatBotMessage } from "react-chatbot-kit";

import VoiceBot from "../voiceBot/VoiceBot";
import LearnigOptions from "./LearningOptions/LearnigOptions";
import LinkList from "./LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hi, I'm here to help. What do you want to learn?`, {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearnigOptions {...props} />,
    },
    {
      widgetName: "voiceCommand",
      widgetFunc: (props) => <VoiceBot />,
    },
    {
      widgetName: "javascriptlinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "reactjslinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to ReactJS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "components",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Learn by practice",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
