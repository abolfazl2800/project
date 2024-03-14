import { FaCircle } from "react-icons/fa";
import { CheckOutlined } from "@ant-design/icons";
import { StyledQuestion } from "./style";

const QuestionBox = () => {
  return (
    <StyledQuestion>
      <div className="question-text">
        <div className="text">لورم ایپزوم چیست؟</div>
        <div className="info">
          <span className="is-read">
            <CheckOutlined />
          </span>
          <span className="time">22:00</span>
        </div>
      </div>
      <div className="question-status">
        <FaCircle />
      </div>
    </StyledQuestion>
  );
};

export default QuestionBox;
