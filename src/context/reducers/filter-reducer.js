export const initialState = {
  sortBy: null,
  filter: {
    size: [],
    sex: [],
    brand: []
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };

    case "CLEAR":
      return initialState;

    case "SIZE":
      const foundSize = state.filter.size.includes(action.payload);
      return {
        ...state,
        filter: {
          ...state.filter,
          size: foundSize
            ? state.filter.size.filter(item => item !== action.payload)
            : [...state.filter.size, action.payload]
        }
      };

    case "IDEAL_FOR":
      const idealFound = state.filter.sex.includes(action.payload);
      return {
        ...state,
        filter: {
          ...state.filter,
          sex: idealFound
            ? state.filter.sex.filter(item => item !== action.payload)
            : [...state.filter.sex, action.payload]
        }
      };

    case "BRAND":
      const foundBrand = state.filter.brand.includes(action.payload);
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: foundBrand
            ? state.filter.brand.filter(item => item !== action.payload)
            : [...state.filter.brand, action.payload]
        }
      };

    default:
      return state;
  }
};
