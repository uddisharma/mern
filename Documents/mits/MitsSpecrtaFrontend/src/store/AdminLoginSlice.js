import { createSlice } from "@reduxjs/toolkit";

const AdminLoginSlice = createSlice({
  name: "Admin login",
  initialState: {
    IsLogin: false,
  },
  reducers: {
    setAdminLogin(state, action) {
      state.IsLogin = action.payload;
    },
  },
});
export const { setAdminLogin } = AdminLoginSlice.actions;
export default AdminLoginSlice.reducer;
