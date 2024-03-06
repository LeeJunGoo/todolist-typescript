import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, editTodo, fetchTodos } from "../../axios/api";
import TodoListItem from "../../component/main/TodoItem";
import { INewTodo } from "../../hooks/interface";
import { StDiv1, StDiv2, StDoneUl, StSectionList, StWorkingUl } from "../../styles/List";

const TodoList = () => {
  //저장된 데이터 가져오기
  const { data: todos } = useQuery<INewTodo, Error, INewTodo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const queryClient = useQueryClient();

  // 삭제
  const { mutate: deleteMutate } = useMutation<void, Error, string>({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  type PickToggleButton = Pick<INewTodo, "id" | "isDone">;

  // 수정
  const { mutate: editMutate } = useMutation<void, Error, PickToggleButton>({
    mutationFn: ({ id, isDone }: PickToggleButton) => editTodo(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (!todos) {
    return <div>로딩중...</div>;
  }

  //타입 추론
  const WorkingTodo = todos.filter((item) => (!item.isDone ? true : false));
  const DoneTodo: INewTodo[] = todos.filter((item: INewTodo) => (item.isDone ? true : false));

  //토글 핸들러
  const ToggleButtonHandler = (id: string, isDone: boolean) => {
    editMutate({ id, isDone });
    // 함수 내용
  };

  //삭제 핸들러
  const DeleteButtonHandler = (id: string) => {
    deleteMutate(id);
  };
  //수정 핸들러

  return (
    <>
      <StSectionList>
        <StDiv1>{/* <button onClick={onCreateTodoHandler}>create todo</button> */}</StDiv1>
        <StDiv2>
          <h2>Working</h2>
          <StWorkingUl>
            {WorkingTodo.map((item) => (
              <TodoListItem
                key={item.id}
                curTodo={item}
                ToggleButton={ToggleButtonHandler}
                DeleteButton={DeleteButtonHandler}
                btnText="완료"
              />
            ))}
          </StWorkingUl>
        </StDiv2>

        <StDiv2>
          <h2>Done</h2>
          <StDoneUl>
            {DoneTodo.map((item) => (
              <TodoListItem
                key={item.id}
                curTodo={item}
                ToggleButton={ToggleButtonHandler}
                DeleteButton={DeleteButtonHandler}
                btnText="취소"
              />
            ))}
          </StDoneUl>
        </StDiv2>
      </StSectionList>
    </>
  );
};

export default TodoList;
