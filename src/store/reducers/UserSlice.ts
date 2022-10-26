import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  loading: boolean;
  userInfo: {};
  userToken: null;
  error: null;
  success: boolean;
}

const initialState: UserState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
