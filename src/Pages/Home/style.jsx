import { styled } from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  height: 100vh;
  .main {
    width: 80vw;
    transition: 0.3s;
    position: relative;
  }
  .sidebar {
    width: 401px;
    flex-shrink: 0;
    background: #d8d8d8;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    padding-top: 30px;
  }
`;
