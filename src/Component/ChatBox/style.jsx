import { styled } from "styled-components";

export const StyledChatBox = styled.div`
  width: 86%;
  height: 85%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 40px;
  right: 7.5vh;
  padding-top: 40px;
  padding-right: 10px;
  overflow: auto;
  scrollbar-width: none;
  padding-bottom: 10px;
`;

export const StyledMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.isBot ? "reverse" : "row-reverse")};
  align-items: baseline;
  margin-top: 40px;
  gap: ${(props) => (props.isBot ? "30px" : "40px")};
  .profile {
    width: 10%;
    img {
      border-radius: 25px;
      width: 40px;
      height: 40px;
    }
  }
  .text {
    /* /* width: 86%; */
    min-width: 70%;
    max-width: 70%;
    padding: 20px;
    flex-shrink: 0;
    border-radius: ${(props) =>
      props.isBot ? "22px 0px 22px 22px" : "0px 22px 22px 22px"};
    background: ${(props) => (props.isBot ? "white" : "#0074df")};
    box-shadow: ${(props) =>
      props.isBot
        ? "0px 4px 50px 0px rgba(0, 0, 0, 0.15)"
        : "0px 4px 50px 0px rgba(0, 116, 223, 0.25)"};
    word-wrap: break-word; /* برای پشتیبانی از مرورگرهای قدیمی */
    overflow-wrap: break-word;
    text-align: justify;
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    color: ${(props) => (props.isBot ? "black" : "white")};
  }
`;
