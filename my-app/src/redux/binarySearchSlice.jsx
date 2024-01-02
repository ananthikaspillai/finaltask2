
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    array:[],
    target:0,
    result:-1,
    left:null,
    right:null,
}
 
export const binarySearchSlice = createSlice({
  name: 'binary',
  initialState,
  reducers: {
    setInputArray: (state, action) => {
      state.array = action.payload;
    },
    settarget: (state, action) => {
      state.target = action.payload;
    },
    setoutpit: (state, action) => {
      state.outp = action.payload;
    },
    setleft: (state, action) => {
      state.left = action.payload;
    },
    setright: (state, action) => {
      state.right = action.payload;
    },
    setTarget: (state, action) => {
      state.target = action.payload;
    },
  },
});
export const {setInputArray,settarget,setresult,setleft,setright}=binarySearchSlice.actions
export default binarySearchSlice.reducer