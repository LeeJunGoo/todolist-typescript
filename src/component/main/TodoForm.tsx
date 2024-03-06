// import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, MouseEvent, useState } from "react";
import { createTodo } from "../../axios/api";
import { INewTodo } from "../../hooks/interface";
import { StDiv, StForm, StInput, StSectionForm, StTextarea } from "../../styles/From";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const queryClient = useQueryClient();

  //todo 저장하기
  const { mutate, isPending, isError } = useMutation<INewTodo, Error, INewTodo>({
    mutationFn: (newTodo: INewTodo) => createTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onSubmitClickHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: INewTodo = {
      id: String(crypto.randomUUID()),
      title,
      content,
      isDone: false,
      deadLine: date.toString(),
    };

    mutate(newTodo);
  };

  const onTItleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onDateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  if (isPending) {
  }

  if (isError) {
  }
  return (
    <StDiv>
      <StSectionForm>
        <p>그래 도전하는 거야!</p>
        <StForm onSubmit={onSubmitClickHandler}>
          <p>주르제</p>
          <StInput type="text" value={title} onChange={onTItleChangeHandler}></StInput>

          <p>내요옹</p>
          <StTextarea value={content} onChange={onContentChangeHandler}></StTextarea>

          <p>양송 일정</p>
          <StInput type="date" value={date} onChange={onDateChangeHandler}></StInput>

          <button type="submit">작성</button>
          {/* <button type="button" onClick={() => dispatch(modalToggle(false))}>
            취소
          </button> */}
        </StForm>
      </StSectionForm>
    </StDiv>
  );
};

export default TodoForm;
