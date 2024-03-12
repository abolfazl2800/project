import { styled } from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  height: 100vh;
  .main {
    width: ${(props) => (props.isShow ? "80vw" : "100vw")};
    transition: 0.3s;
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
    width: ${(props) => (props.isShow ? "20vw" : 0)};
    transition: 0.3s;
    background-color: #d8d8d8;
    height: 100vh;
    position: absolute;
    right: 0px;
    top: 0;
  }
`;
