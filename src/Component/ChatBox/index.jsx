import { StyledChatBox, StyledMessage } from "./style";

const ChattBox = ({ messages }) => {
  console.log(messages);

  return (
    <StyledChatBox>
      <div className="chat-history">
        {messages?.map((message, index) => (
          <StyledMessage key={index} className={"message"} isBot={message.isBot}>
            <div className="profile">
              <img src="/user-image.png" alt="" />
            </div>
            <div className="text">{message.text}</div>
          </StyledMessage>
        ))}
      </div>
    </StyledChatBox>
  );
};

export default ChattBox;
