// Task 13: Reducer with actions

type Action = {
  type: "increment" | "decrement";
};

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      const _exhaustiveCheck: never = action.type;
      return state;
  }
}

let currentState = 0;

currentState = reducer(currentState, { type: "increment" });
console.log("After increment:", currentState);

currentState = reducer(currentState, { type: "increment" });
console.log("After increment:", currentState);

currentState = reducer(currentState, { type: "decrement" });
console.log("After decrement:", currentState);

const actions: Action[] = [
  { type: "increment" },
  { type: "increment" },
  { type: "decrement" },
  { type: "increment" },
];

const finalState = actions.reduce(reducer, 0);
console.log("Final state:", finalState);

export { reducer, Action };