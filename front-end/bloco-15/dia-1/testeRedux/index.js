const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});
// console.log(Redux);
// const store = Redux.createStore();

const ESTADO_INICIAL = {
  login: false,
  email: "",
  };

const reducer = (state = ESTADO_INICIAL, action) => {
  // console.log(state)
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
        return state;
  }  
};

const store = Redux.createStore(reducer);

console.log(store.getState());

store.dispatch(fazerLogin("algum@email.com"));

console.log(store.getState());
