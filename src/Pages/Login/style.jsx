import { styled } from "styled-components";
import { Form } from "antd";

export const StyledForm = styled(Form)`
  width: 390px;
  margin: 300px auto;
  padding: 5px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  direction: rtl;
  .ant-input {
    width: 150%;
    padding: 10px;
    direction: rtl;
    outline: none !important;
    border: none !important;
    box-shadow: 0 0 10px lightgray;
    font-family: inherit;
  }
  .ant-form-item .ant-form-item-control-input {
    min-height: unset;
  }
  .ant-input-affix-wrapper {
    width: 150% !important;
    padding: 10px;
    direction: rtl;
    outline: none !important;
    border: none !important;
    font-family: inherit;
    box-shadow: 0 0 10px lightgray;
    .ant-input {
      box-shadow: none;
    }
  }
  .ant-btn {
    height: auto;
  }
  .ant-btn-primary {
    width: 100px;
    padding: 8px;
    position: absolute;
    left: 0px;
  }
  .ant-form-item-explain-error {
    margin-top: 10px;
  }
`;
