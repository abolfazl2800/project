import { styled } from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  height: 100vh;
  .main {
    width: "80vw";
    transition: 0.3s;
    float: right;
    position: relative;
    .show-button {
      padding: 5px;
      width: 30px;
      padding-top: 15px;
      background-color: whitesmoke;
      border-radius: 5px;
      box-shadow: 0 0 5px #cfcfcf;
      position: absolute;
      right: 2%;
      top: 49%;
      z-index: 10;
      text-align: center;
      cursor: default;
    }
  }
  .sidebar {
    width: 401px;
    flex-shrink: 0;
    background: #d8d8d8;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 36px 18px;
  }
`;
