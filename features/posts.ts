import { createSlice } from "@reduxjs/toolkit";

import { PostsData } from "../data/dummyData";

export const postSlice = createSlice({
  initialState: { value: PostsData },
  name: "posts",
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export default postSlice.reducer;

// // toggle boolean

// // 初期状態のstate定義
// const initialState = {
//   booleanValue: false,
// };

// // reducerの定義
// export const toggleReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case TOGGLEBOOLEAN:
//       return {
//         ...state,
//         booleanValue: !state.booleanValue,
//       };
//     default:
//       return state;
//   }
// };

// // actionの定義
