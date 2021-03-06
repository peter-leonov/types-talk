import { Todo } from "./todo";

// RUN THE TASK!!!

const getTodo = (id: number): Promise<Todo> =>
  fetch(`/todo/${id}`).then(res => res.json());

async function renderTodo(todoId: number) {
  const todo = await getTodo(todoId);
  console.log(todo.title);
  // console.log(todo.done);
}

renderTodo(1);
