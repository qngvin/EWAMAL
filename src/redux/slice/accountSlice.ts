import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InterfaceAccountState} from '../../constant/interface';
const initialState: InterfaceAccountState = {
  currentUser: null,
  isLogin: false,
  notification: null,
  role: '',
  username: '',
  userId: '',
  loading: false,
  error: null,
  success: false,
};
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
  extraReducers: () => {
    // Các reducer thêm vào ở đây nếu có
    // phần dưới này là xử lý api nếu cos
  },
});

export const {setRole, setIsLogin, setUsername,setUserId} = accountSlice.actions;

export default accountSlice.reducer;
