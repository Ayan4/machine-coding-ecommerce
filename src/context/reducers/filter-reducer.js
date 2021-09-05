export const initialState = {
  all: true,
  highToLow: false,
  lowToHigh: false,
  small: false,
  medium: false,
  large: false,
  xl: false,
  men: false,
  women: false
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRICE":
      return {
        ...state,
        all: true,
        highToLow: false,
        lowToHigh: false
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        all: false,
        lowToHigh: false,
        highToLow: !state.highToLow
      };

    case "LOW_TO_HIGH":
      return {
        ...state,
        all: false,
        highToLow: false,
        lowToHigh: !state.lowToHigh
      };
    case "SMALL":
      return {
        ...state,
        small: !state.small,
        medium: false,
        large: false,
        xl: false
      };
    case "MEDIUM":
      return {
        ...state,
        small: false,
        medium: !state.medium,
        large: false,
        xl: false
      };
    case "LARGE":
      return {
        ...state,
        small: false,
        medium: false,
        large: !state.large,
        xl: false
      };

    case "XL":
      return {
        ...state,
        small: false,
        medium: false,
        large: false,
        xl: !state.xl
      };
    case "CLEAR_SIZE":
      return {
        ...state,
        small: false,
        medium: false,
        large: false,
        xl: false
      };
    case "MEN":
      return {
        ...state,
        men: !state.men,
        women: false
      };
    case "WOMEN":
      return {
        ...state,
        men: false,
        women: !state.women
      };
    case "CLEAR_GENDER":
      return {
        ...state,
        men: false,
        women: false
      };

    default:
      return state;
  }
};
