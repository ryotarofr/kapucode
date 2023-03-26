import { createSlice } from "@reduxjs/toolkit";

const TOGGLEBOOLEAN = "TOGGLE_BOOLEAN";

export const toggleBoolean = () => ({
  type: TOGGLEBOOLEAN,
});

export const postBoolSlice = createSlice({
  initialState: { value: false },
  name: "booleanValue",
  reducers: {
    changeBoolean: (state, action) => {
      switch (action.type) {
        case TOGGLEBOOLEAN:
          return {
            ...state,
            booleanValue: !state.value,
          };
        default:
          return state;
      }
    },
  },
});

export default postBoolSlice.reducer;
