import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk('products/fetch', async function () {
    const response = await fetch('https://api.escuelajs.co/api/v1/products/');
    return await response.json();
})
const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        status: 'idle', //idle,loading,success,failed
        error: null
    },
    extraReducers: function (builder) {
        builder.addCase(fetchData.pending, (state, actio) => {
            state.status = 'loading';
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = "success";
        }).addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})
export const { loadProdcts } = productSlice.actions;
export default productSlice.reducer;