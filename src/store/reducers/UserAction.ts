import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
   'user/fetchAll',
   async (_, thunkAPI) => {
       try {
           const response = await axios.get('https://jsonplaceholder.typicode.com/user2s')
           return response.data;
       } catch (e) {
           return thunkAPI.rejectWithValue("Не удалось загрузить контакты")
       }
   }
)