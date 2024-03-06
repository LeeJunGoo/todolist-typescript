// import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEvent } from "react";
import { createTodo } from "../../axios/api";
import { INewTodo } from "../../hooks/interface";
import useInput from "../../hooks/useInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalToggle } from "../../store/modules/modalForm";
import { StDiv, StForm, StInput, StSectionForm, StTextarea } from "../../styles/Form";

const TodoForm = () => {
  const { value, onChangeHandler, onChangeTextAreaHandler, reset } = useInput({
    title: "",
    content: "",
    date: "",
  });

  const { title, content, date } = value;

  const dispatch = useAppDispatch();
  const modalSelector = useAppSelector((state) => state.modalToggle.value);

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
    dispatch(modalToggle(false));
    reset();
  };

  if (isPending) {
  }

  if (isError) {
  }
  return (
    <>
      {modalSelector ? (
        <StDiv>
          <StSectionForm>
            <p>그래 도전하는 거야!</p>
            <StForm onSubmit={onSubmitClickHandler}>
              <p>주르제</p>
              <StInput type="text" name="title" value={title} onChange={onChangeHandler}></StInput>

              <p>내요옹</p>
              <StTextarea value={content} name="content" onChange={onChangeTextAreaHandler}></StTextarea>

              <p>양송 일정</p>
              <StInput type="date" value={date} name="date" onChange={onChangeHandler}></StInput>

              <button type="submit">작성</button>
              <button type="button" onClick={() => dispatch(modalToggle(false))}>
                취소
              </button>
            </StForm>
          </StSectionForm>
        </StDiv>
      ) : null}
    </>
  );
};

export default TodoForm;
