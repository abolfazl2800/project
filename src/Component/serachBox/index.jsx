import { Input } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { StyledSerachBox } from "./style";

const SearchBox = () => {
  return (
    <StyledSerachBox>
      <Input
        placeholder="نوشتن برای جستجو ..."
        className="input-antd"
        // prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
        style={{ width: 200, marginRight: 10 }}
        suffix={
          <>
            <SearchOutlined
              style={{
                color: "rgba(0,0,0,.25)",
              }}
            />
            <MoreOutlined
              style={{
                color: "rgba(0,0,0,.25)",
              }}
            />
          </>
        }
      />
    </StyledSerachBox>
  );
};

export default SearchBox;
