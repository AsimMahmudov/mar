const initalState = {
  money: 20000,
  expenses: 0,
  products: [],
};

export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "TAKE_MONEY":
      return { ...state, money: state.money - action.paylaod };
    case "ADD_MONEY":
      return { ...state, expenses: state.expenses + action.paylaod };
    case "ToDo":
      return { ...state, products: [...state.products, action.paylaod] };
    default:
      return state;
  }
};
