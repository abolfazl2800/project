import { StyledSetting } from "./style";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { IoMdExit } from "react-icons/io";

const Setting = () => {
  return (
    <StyledSetting>
      <div className="setting">
        <div className="delete">
          <DeleteOutlined /> حذف تاریخچه گفتگو
        </div>
        <div className="update">
          <UserOutlined /> ارتقا به نسخه حرفه ای
        </div>
          </div>
          <div className="exit"><IoMdExit />خروج از حساب کاربری</div>
    </StyledSetting>
  );
};

export default Setting;
