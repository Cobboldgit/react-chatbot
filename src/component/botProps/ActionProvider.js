class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet(res) {
    const greetingMessage = this.createChatBotMessage(`${res}, friend.`);
    this.updateChatbotState(greetingMessage);
  }

  whatSaysTheTime() {
    let date = new Date();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hour = date.getHours();
    const time = this.createChatBotMessage(`The time is ${hour}:${min}:${sec}`);
    this.updateChatbotState(time);
  }

  whatCanYouDo() {
    const whatCanYouDoText = this.createChatBotMessage(
      `I'm here to assist you to learn how to code. For example you can type teach me javascript`
    );
    this.updateChatbotState(whatCanYouDoText);
  }

  voiceCommand() {
    const message = this.createChatBotMessage(`ok...`, {
      widget: "voiceCommand"
    })
    this.updateChatbotState(message)
  }

  howWasYourNight() {
    let ans = "fine and yours"
    let date = new Date()
    let hour = date.getHours()
    if (hour >= 10) {
      ans = "I think this is not the time to ask this question"
    }
    const message = this.createChatBotMessage(ans)
    this.updateChatbotState(message)
  }

  expression() {
    let expArray = [
      this.createChatBotMessage(`Am fine`),
      this.createChatBotMessage(`Am doing great`),
    ];
    const expArrFunc = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };
    let updateExpression = expArrFunc(expArray);

    this.updateChatbotState(updateExpression);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptlinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleReactJsList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on reactJs:",
      {
        widget: "reactjslinks"
      }
    );
    this.updateChatbotState(message)
  };

  updateChatbotState(message) {
    //Note: This function is set in the constructor, and is passed in
    //from the top level Chatbot component. The setState function here
    //actually maupdateChatbotStatenipulates the top level state of the Chatbot, so it's
    //important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
