import { styled } from "styled-components";

export const StyledUserBox = styled.div`
  width: 90%;
  height: 60px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  .image {
    width: 48px;
    height: 48px;
    border-radius: 50px;
    flex-shrink: 0;
    background: url("/user-image.png");
    margin-right: 5px;
  }
  .user-name {
    width: 172.645px;
    color: #000;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .theme-button {
    width: 106.04px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #d8d8d8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    color: #000;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
