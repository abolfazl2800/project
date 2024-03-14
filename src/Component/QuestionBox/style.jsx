import { styled } from "styled-components";

export const StyledQuestion = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  .question-text {
    width: 268px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #0074df;
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: space-between;
    .text {
      color: #fff;
      text-align: right;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .info {
      display: flex;
      align-items: center;
      gap: 10px;
      .time {
        color: #fff;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .is-read {
        svg {
          width: 20px;
          height: 14px;
          path {
            fill: white;
          }
        }
      }
    }
  }
  .question-status {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #fff;
    box-shadow: -2px 2px 8px 0px rgba(255, 184, 0, 0.5);
    text-align: center;
    svg {
      width: 8px;
      height: 20px;
      path {
        fill: #ffb800;
        vertical-align: middle;
      }
    }
  }
`;
