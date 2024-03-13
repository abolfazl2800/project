import { styled } from "styled-components";

export const StyledSerachBox = styled.div`
  width: 90%;
  height: 60px;
  margin: 10px auto;
  flex-shrink: 0;
  border-radius: 50px;
  font-family: inherit;
  background: #fff;
  .ant-input-affix-wrapper {
    width: 100% !important;
    max-width: 100%;
    max-height: 100%;
    margin: 0 !important;
    border-radius: 45px;
    .ant-input {
      padding: 18px;
      color: #000;
      text-align: right;
      font-family: IRANSansXFaNum !important;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .ant-input-suffix {
      display: flex;
      width: 80px;
      align-items: center;
      justify-content: space-around;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .anticon {
        & svg {
          width: 30px;
          height: 30px;
          path {
            transition: 0.2s;
          }
          &:hover path {
            fill: gray;
          }
        }
      }
    }
  }
`;
