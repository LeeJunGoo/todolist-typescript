import { GlobalStyle } from "./assets/GlobalStyle";
import Header from "./component/common/Header";
import Main from "./component/main/Main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
