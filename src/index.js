import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id, 10);
  store.dispatch(deleteToDo(id));
};
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};
form.addEventListener("submit", onSubmit);

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);
// const add = document.getElementById("add");	const ADD_TODO = "ADD_TODO";
// const minus = document.getElementById("minus");	const DELETE_TODO = "DELETE_TODO";
// const number = document.querySelector("span");

// number.innerText = 0;	const reducer = (state = [], action) => {

//   console.log(action);
// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
//   switch (action.type) {	  switch (action.type) {
//     case ADD:	    case ADD_TODO:
//       return count + 1;	      return [];
//     case MINUS:	    case DELETE_TODO:
//       return count - 1;	      return [];
//     default:	    default:
//       return count;	      return state;
//   }	  }
// };	};

// const countStore = createStore(countModifier);	const store = createStore(reducer);
