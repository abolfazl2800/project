import { styled } from "styled-components";

export const StyledMessageBox = styled.div`
  display: flex;
  width: 88%;
  position: absolute;
  top: calc(100vh - 80px);
  margin: auto;
  right: 4vw;
  .ant-input-affix-wrapper {
    z-index: 10000;
    padding: 0;
    border-radius: 15px;
    .ant-input {
      height: 50px;
      border-radius: 0 15px 15px 0;
      padding: 5px;
      background: #fff;
      box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
      color: #000;
      text-align: right;
      font-family: IRANSansXFaNum !important;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border: none;
      outline: none;
    }
    .ant-input-suffix {
      width: 50px !important;
      height: 50px !important;
      flex-shrink: 0 !important;
      border-radius: 15px 0px 0px 15px !important;
      background: #fff !important;
      box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1) !important;
      display: flex;
      justify-content: center;
      margin-inline-start: 0;
      svg {
        width: 20.172px;
        height: 18.621px;
        flex-shrink: 0;
        rotate: 180deg;
        margin-top: 4px;
        stroke: #000;
        opacity: 0.5;
      }
    }
  }
`;
