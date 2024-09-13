import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./pages/TodoTemplate";
import TodoList from './components/TodoList';
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/store";

function App() {
  return (
    // redux 상태변수를 사용할 컴포넌트들을 Provider 컴포넌트로 감싸고
    // store를 연결해준다.
    // <Provider store={store}> {/** store 연결 */} 
      <TodoTemplate>
        <TodoInsert/>
        <TodoList/>
      </TodoTemplate>
    // </Provider>
  );
}

export default App;
