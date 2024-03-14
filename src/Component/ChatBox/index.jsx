import { StyledChatBox } from "./style";

const ChattBox = ({messages}) => {
  return (
    <StyledChatBox>
      <div className="chat-history">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={message.isBot ? "bot-message" : "user-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
    </StyledChatBox>
  );
};

export default ChattBox;
