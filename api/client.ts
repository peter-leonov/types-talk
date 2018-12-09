import { Todo } from "./todo";

const getTodo = (id: number): Promise<Todo> =>
  fetch(`/todo/${id}`).then(res => res.json());

async function renderTodo(todoId: number) {
  const todo = await getTodo(todoId);
  console.log(todo.title);
}

renderTodo(1);
