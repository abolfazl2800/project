import "./style";
import { StyledHome } from "./style";
import UserBox from "../../Component/userBox";
import SearchBox from "../../Component/serachBox";
import HistoryBox from "../../Component/historyBox";

const Home = () => {
  return (
    <StyledHome>
      <main className="main"></main>
      <div className="sidebar">
        <UserBox />
        <SearchBox />
        <HistoryBox />
      </div>
    </StyledHome>
  );
};

export default Home;
