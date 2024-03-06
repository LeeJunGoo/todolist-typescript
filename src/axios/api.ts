import axios from "axios";
import { INewTodo } from "../hooks/interface";

const todoClient = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});

//1. todo 생성
export const createTodo = async (newTodo: INewTodo): Promise<INewTodo> => {
  const { data } = await todoClient.post("/todos", newTodo);
  return data;
};

//2. todo 읽기
export const fetchTodos = async (): Promise<INewTodo> => {
  const { data } = await todoClient.get("/todos");
  return data;
};

// 3. todo 삭제
export const deleteTodo = async (id: string) => {
  await todoClient.delete(`/todos/${id}`);
};

//4. toggle 변경
export const editTodo = async (id: string, isDone: boolean) => {
  await todoClient.patch(`/todos/${id}`, { isDone });
};
