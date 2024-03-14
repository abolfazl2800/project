import { Input } from "antd";
import { StyledMessageBox } from "./style";
import { MdOutlineSend } from "react-icons/md";

const MessageBox = ({handleSendMessage, setInputText, inputText}) => {
  return (
    <StyledMessageBox>
      <Input
        placeholder="اینجا بنویسید..."
        onPressEnter={handleSendMessage}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        suffix={
          <div className="submit-icon">
            <MdOutlineSend />
          </div>
        }
      />
    </StyledMessageBox>
  );
};

export default MessageBox;
