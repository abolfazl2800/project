import { styled } from "styled-components";

export const StyledHistory = styled.div`
  width: 80%;
  max-width: 90%;
  height: 528px;
  max-height: 528px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin: 10px auto;
  padding: 32px 20px;
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
    margin: 30px 0;
    gap: 10px;
    display: flex;
    align-items: center;
    margin: 30px 0;
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
`;
