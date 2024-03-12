import { useState } from "react";
import "./style";
import { StyledHome } from "./style";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import UserBox from "../../Component/userBox";

const Home = () => {
  const [show, setShow] = useState(true);
  const ShowSidebarHandler = () => {
    setShow(!show);
  };
  return (
    <StyledHome isShow={show}>
      <main className="main">
        <div className="show-button" onClick={ShowSidebarHandler}>
          {show ? <FaChevronRight /> : <FaChevronLeft />}
        </div>
      </main>
      <div className="sidebar">
        <UserBox />
      </div>
    </StyledHome>
  );
};

export default Home;
