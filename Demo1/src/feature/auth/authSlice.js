import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null, 
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    isActive: (state, action) => {
      state.activeModal = action.payload; 
    },
    isNotActive: (state) => {
      state.activeModal = null; 
  },
  }
});

export const { isActive, isNotActive } = authSlice.actions;
export default authSlice.reducer;
