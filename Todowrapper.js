import React, { useState } from "react"; // ✅ useState with capital "S"
import Todoform from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

const Todowrapper = () => {
  const [todos, setTodos] = useState([]); // ✅ useState not usestate

  // Add todos
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  //delete todo

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  //toggle complete Todo

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //edit todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //edit task todo

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  console.log("todos", todos);
  return (
    <div className="Todowrapper">
      <h1>web developmenent task</h1>
      <Todoform addTodo={addTodo} />

      {/* display todos  */}

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default Todowrapper;
