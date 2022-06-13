import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface IUserState {
  name: string;
}

const initialState: IUserState = {
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {setName} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
