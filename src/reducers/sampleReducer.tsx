import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropTypes {
  sampleData: string;
}

let initialState: PropTypes = {
  sampleData: "1",
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    changeSampleData(state: PropTypes, action: PayloadAction<string>) {
      state.sampleData = action.payload;
    },
    setDataSingle(state: PropTypes) {
      state.sampleData = "싱글";
    },
  },
});

export default sampleSlice.reducer;
export const sampleActions = sampleSlice.actions;
