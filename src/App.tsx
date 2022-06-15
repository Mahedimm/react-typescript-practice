import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lists from "./components/Lists";

// const Box: React.FC<{ title: string }> = ({ title }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// };

function App() {
  interface Todo {
    id: number;
    text: string;
  }

  type ActionType =
    | { type: "ADD_TODO"; text: string }
    | { type: "REMOVE_TODO"; id: number };

  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { id: state.length, text: action.text }];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.id);
      default:
        throw new Error("Unhandled action");
    }
  };

  const [todos, dispatch] = React.useReducer(reducer, []);

  const newTodoRef = React.useRef<HTMLInputElement>(null);

  const addTodo = useCallback(() => {
    dispatch({ type: "ADD_TODO", text: newTodoRef.current!.value });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({ type: "REMOVE_TODO", id });
  }, []);

  return (
    <div className="App">
      {/* <Box title="helllllllllllo" /> */}

      <input type="text" ref={newTodoRef} />
      <button onClick={addTodo}>ADD</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)}>remove</button>
        </div>
      ))}
      <Lists />
    </div>
  );
}

export default App;
