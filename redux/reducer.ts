type Todo = {
  readonly id: number;
  readonly title: string;
  // readonly done: boolean;
  done: boolean;
};

// type State = ReadonlyArray<Todo>;
type State = Array<Todo>;

type AddTodo = {
  type: "ADD_TODO";
  payload: Todo;
};

type SetDone = {
  type: "SET_DONE";
  payload: number;
};

type Action = AddTodo | SetDone;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // case "ADD_DOTO":
    // case "SET_DONE":
    case "ADD_TODO":
      // return [...state, action.payload];
      state.push(action.payload);
      break;
    case "SET_DONE":
      // return state.map(todo => {
      //   todo.id === action.payload ? { ...todo, done: true } : todo;
      // });
      state.forEach(todo => {
        if (todo.id == action.payload) todo.done = true;
      });
      break;
    // default:
    //   console.log(action.type);
  }

  // remove
  return state;
};

export const getTodo = (state: State, id: number) =>
  state.find(todo => todo.id == id);

function someLogic() {
  const firstTodo = getTodo([{ id: 1, title: "First!", done: false }], 1);
  // console.log(firstTodo.title);
}
