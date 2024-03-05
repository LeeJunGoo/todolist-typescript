// import React from "react";
import { StDiv, StForm, StInput, StSectionForm, StTextarea } from "../../styles/From";

const TodoForm = () => {
  return;
  <StDiv>
    <StSectionForm>
      <p>그래 도전하는 거야!</p>
      <StForm>
        <p>주르제</p>
        <StInput></StInput>

        <p>내요옹</p>
        <StTextarea></StTextarea>

        <p>양송 일정</p>
        <StInput></StInput>

        <button type="submit">작성</button>
        {/* <button type="button" onClick={() => dispatch(modalToggle(false))}>
          취소
        </button> */}
      </StForm>
    </StSectionForm>
  </StDiv>;
};

export default TodoForm;
