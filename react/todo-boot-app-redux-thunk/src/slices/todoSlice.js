import {createSlice} from '@reduxjs/toolkit';
import { changeChecked, deleteTodo, getTodos } from '../apis/todoApis';
import { addTodo } from '../apis/todoApis';

// redux에서 관리하는 상태변수 선언
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: { 

    },
    // thunk는 extraReducers에서 처리한다.
    extraReducers: (builder) => {
        // thunk 상태에 따른 처리를 builder의 addCase라는 메소드를 이용해서 각각 추가한다.
        builder.addCase(getTodos.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(getTodos.rejected, (state, action) => {
            if(action.payload.response.status === 403) {
                alert('로그인이 필요합니다.');
                window.location.href = '/login';
            }

            return state;
        });
        builder.addCase(addTodo.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(addTodo.rejected, (state, action) => {
            alert('에러가 발생했습니다.');
            return state;
        });
        builder.addCase(deleteTodo.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(deleteTodo.rejected, (state, action) => {
            alert('에러가 발생했습니다.');
            return state;
        });
        builder.addCase(changeChecked.fulfilled, (state, action) => ({
            ...state,
            todos: action.payload
        }));
        builder.addCase(changeChecked.rejected, (state, action) => {
            alert('에러가 발생했습니다.');
            return state;
        })

    }
});

// 위에서 지정한 reducer 함수명으로 action creator 메소드가 생성된다.
// action reator 메소드를 이용해서 dispatch를 한다.
export const {get_todos} = todoSlice.actions;

export default todoSlice.reducer;