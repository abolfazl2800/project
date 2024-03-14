import { styled } from "styled-components";

export const StyledSetting = styled.div`
  margin-top: 16px;
  .setting {
    color: #515151;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 14px;
    .delete {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      &:hover {
        color: black;
      }
    }
    .update {
      display: flex;
      align-items: center;
      gap: 5px;
      &:hover {
        color: black;
      }
      cursor: pointer;
    }
  }
  .exit {
    position: absolute;
    bottom: calc(0vh + 2vh);
    color: red;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #bb0008;
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
