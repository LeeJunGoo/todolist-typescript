export interface INewTodo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  deadLine: string;
}

export interface TodoItemProps {
  key: string;
  curTodo: INewTodo;
  ToggleButton: (id: string, isDone: boolean) => void;
  DeleteButton: (id: string) => void;
  btnText: string;
}

export interface TodoDate {
  year: "numeric";
  month: "long";
  day: "numeric";
}

export interface ITest {
  title: string;
  content: string;
  date: string;
}
