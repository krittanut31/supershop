import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: null,
    email: null,
    profileImage: null,
    token: null,
  },
  reducers: {
    setCredentials: (
      state,
      { payload: { id, username, email, profileImage, token } }
    ) => {
      state.id = id;
      state.username = username;
      state.email = email;
      state.profileImage = profileImage;
      state.token = token;
    },
    removeCredentials: (state) => {
      state.id = null;
      state.username = null;
      state.email = null;
      state.profileImage = null;
      state.token = null;
    },
  },
});

export const { setCredentials, removeCredentials } = userSlice.actions;

export default userSlice.reducer;
