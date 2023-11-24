import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const signUp = createAsyncThunk("auth/singUp", async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signUp`, data);

    localStorage.setItem("clientData", JSON.stringify(response.data));

    toast.success("Вы успешно зарегистрированы!");

    return response.data;
  } catch (error) {
    toast.error(error.message);

    return error.message;
  }
});

const signIn = createAsyncThunk("auth/signIn", async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signIn`, data);

    localStorage.setItem("clientData", JSON.stringify(response.data));

    toast.success("Вы успешно зарегистрированы!");

    return response.data;
  } catch (error) {
    toast.error(error.message);

    return error.message;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthourizated: false,
    data: {},
  },
  reducers: {
    autoLogin(state, { payload }) {
      state.isAuthourizated = true;
      state.data = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthourizated = true;
        if (typeof action.payload !== "string") {
          state.data = action.payload;
        }
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthourizated = true;
        if (typeof action.payload !== "string") {
          state.data = action.payload;
        }
      })

      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const authActions = authSlice.actions;
export { authSlice, signUp, signIn };
