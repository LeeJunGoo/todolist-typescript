import { GlobalStyle } from "./assets/GlobalStyle";
import TodoForm from "./component/main/TodoForm";
import TodoList from "./component/main/TodoList";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
