class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet("Hi");
    }

    if (lowerCaseMessage.includes("voice command")) {
      this.actionProvider.voiceCommand()
    }

    if(lowerCaseMessage.includes("how was your night")) {
      this.actionProvider.howWasYourNight()
    }

    if (lowerCaseMessage.includes("what can you do")) {
      this.actionProvider.whatCanYouDo()
    }

    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet("Hello");
    }

    if (lowerCaseMessage.includes("how are you")) {
      this.actionProvider.expression();
    }

    if (lowerCaseMessage.includes(`what is the time`) || lowerCaseMessage.includes(`what says the time`)) {
      this.actionProvider.whatSaysTheTime();
    }

    if (lowerCaseMessage.includes("react")) {
      this.actionProvider.handleReactJsList()
    }

    if (
      lowerCaseMessage.includes("javascript") ||
      lowerCaseMessage.includes("js")
    ) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;
