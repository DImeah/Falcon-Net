import { createSlice } from "@reduxjs/toolkit";

const initialUserState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: initialUserState,
  activeUsers: [],
  conversations: [],
  currentConversation: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    clearUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
    activeUsers: (state, action) => {
      state.activeUsers = action.payload;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload;
    },
  },
});

export const {
  setUser,
  clearUser,
  activeUsers,
  setConversations,
  setCurrentConversation,
} = authSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectActiveUsers = (state) => state.user.activeUsers;
export const selectConversations = (state) => state.user.conversations;
export const selectCurrentConversation = (state) =>
  state.user.currentConversation;
const userReducer = authSlice.reducer;
export default userReducer;
