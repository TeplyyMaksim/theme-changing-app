const defaultState = {
  brand: 'YELLOW'
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_BRAND': {
      return { brand: action.brand }
    }
    default: {
      return state;
    }
  }
};

export default app;