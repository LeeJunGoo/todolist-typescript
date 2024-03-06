import { TodoDate, TodoItemProps } from "../../hooks/interface";
import { StBack, StDiv5, StDiv6, StDiv7, StDoneLi, StFront, StH2, StP2, StTime, StWorkingLi } from "../../styles/List";

const TodoItem = ({ curTodo, ToggleButton, DeleteButton, btnText }: TodoItemProps) => {
  const date = new Date(curTodo.deadLine);
  const options: TodoDate = { year: "numeric", month: "long", day: "numeric" };

  return curTodo.isDone === false ? (
    <StWorkingLi>
      <StFront>
        <StH2>{curTodo.title}</StH2>
        <StTime>{date.toLocaleDateString("ko-KR", options)}</StTime>
        {/* <StFigure>
          <img src={profile}></img>
          <span>닉네임</span>
        </StFigure> */}

        <StP2>{curTodo.content}</StP2>
      </StFront>
      <StBack>
        <StDiv5>
          <button onClick={() => ToggleButton(curTodo.id, !curTodo.isDone)}>{btnText}</button>
          <button onClick={() => DeleteButton(curTodo.id)}>삭제</button>
        </StDiv5>
      </StBack>
    </StWorkingLi>
  ) : (
    <StDoneLi>
      <StDiv7>
        <h2>{curTodo.title}</h2>
        <time>{date.toLocaleDateString("ko-KR", options)}</time>
      </StDiv7>

      <StDiv6>
        <button onClick={() => ToggleButton(curTodo.id, !curTodo.isDone)}>{btnText}</button>
        <button onClick={() => DeleteButton(curTodo.id)}>삭제</button>
      </StDiv6>
    </StDoneLi>
  );
};

export default TodoItem;
