import { StyledHistory } from "./style";
import {
  MoreOutlined,
  FilterOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import QuestionBox from "../QuestionBox";

const HistoryBox = () => {
  return (
    <StyledHistory>
      <div className="header">
        <span className="text">تاریخچه گفتگو</span>
        <MoreOutlined
          style={{
            color: "rgba(0,0,0,.25)",
          }}
        />
      </div>
      <div className="filters">
        <div className="filter-icon">
          <FilterOutlined />
        </div>
        <div className="tags">
          <Tag closable closeIcon={<CloseOutlined />}>
            1 ساعت گذشته
          </Tag>
          <Tag closable closeIcon={<CloseOutlined />}>
            1 هفته گذشته
          </Tag>
        </div>
      </div>
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <div className="new-chat">
        <PlusOutlined />
        گفتگوی جدید
      </div>
    </StyledHistory>
  );
};

export default HistoryBox;
