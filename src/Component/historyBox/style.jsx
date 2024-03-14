import { styled } from "styled-components";

export const StyledHistory = styled.div`
  width: 80%;
  max-width: 90%;
  height: 460px;
  max-height: 528px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  padding: 16px 20px;
  position: relative;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      color: #000;
      text-align: right;
      /* font-family: Inter; */
      font-size: 22px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .filters {
    width: 100%;
    gap: 10px;
    display: flex;
    align-items: center;
    margin: 23px 0;
    .filter-icon {
      width: 26px;
      height: 26px;
      flex-shrink: 0;
      border-radius: 8px;
      background: #0074df;
      text-align: center;
      padding-top: 3px;
      .anticon svg path {
        fill: white;
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .ant-tag {
        height: 26px;
        width: 130.105px;
        flex-shrink: 0;
        border-radius: 8px;
        cursor: default;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        outline: none;
        background-color: #e6f2fc;
        color: #0074df;
        text-align: right;
        font-family: inherit !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        .ant-tag-close-icon {
          width: 20.784px;
          height: 18px;
          flex-shrink: 0;
          border-radius: 5px;
          background: #0074df;
          text-align: center;
          vertical-align: middle;
          padding-top: 2px;
          & svg {
            vertical-align: middle;
            width: 12.252px;
            height: 12.252px;
            flex-shrink: 0;
            & path {
              color: white;
            }
          }
        }
      }
    }
  }
  .new-chat {
    width: 100%;
    height: 75px;
    flex-shrink: 0;
    border-radius: 0px 0px 25px 25px;
    background: #0074df;
    position: absolute;
    right: 0px;
    top: 418px;
    text-align: center;
    display: flex;
    gap: 4px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: #fff;
    text-align: right;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
`;
