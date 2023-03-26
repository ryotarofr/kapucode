type PostState = {
  isError: boolean;
  isLoading: boolean;
  post: {};
};

type PostAction = {
  payload?: any;
  type: string;
};

export const postActionKind = {
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const INITIAL_STATE = {
  isError: false,
  isLoading: false,
  post: {},
};

export const postReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case postActionKind.FETCH_START:
      return {
        isError: false,
        isLoading: true,
        post: {},
      };
    case postActionKind.FETCH_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        post: action.payload,
      };
    case postActionKind.FETCH_ERROR:
      return {
        isError: true,
        isLoading: false,
        post: {},
      };
    default:
      return state;
  }
};

type PostBoolState = {
  isBool: boolean;
  post: {};
};

export const INITIAL_STATE2 = {
  isBool: false,
  post: {},
};

export const toggleBoolean = () => ({
  type: TOGGLE_BOOLEAN,
});

// actionの定義
export const TOGGLE_BOOLEAN = "TOGGLE_BOOLEAN";

// reducerの定義
export const postReducer2 = (state: PostBoolState, action: PostAction) => {
  switch (action.type) {
    case TOGGLE_BOOLEAN:
      return {
        ...state,
        isBool: !state.isBool,
      };
    default:
      return state;
  }
};
