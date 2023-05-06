export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: payload,
      };

    case 'UPDATE_USER_AUTH':
      return {
        ...state,
        authUser: payload,
      };

    case 'CREATE_VALIDATION_USER_CODE':
      return {
        ...state,
        validationCode: payload,
      };

    case 'UPDATE_BASIC_DEMOS':
      return {
        ...state,
        basicDemos: payload,
      };

    case 'UPDATE_ADVANCED_DEMOS':
      return {
        ...state,
        advancedDemos: payload,
      };

    default:
      return state;
  }
};
