import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  isLoading:true,
  data:null
}

export const fetchData = createAsyncThunk("/fetchData",
  async(id,{rejectWithValue})=>{
    try{
      const response = await axios.get(
        "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"
      );

      return response?.data;
    }catch(error){
      return rejectWithValue(error?.response?.data);
    }
  }
)

const dataSlice = createSlice({
  name:"dataSlice",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state,action) => {
        state.isLoading = false;
        state.data = action?.payload[0]?.page_config
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      });
  }
});


export default dataSlice.reducer;