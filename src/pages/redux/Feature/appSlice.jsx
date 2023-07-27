import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () =>{
    return fetch('http://localhost:5000/api/v1/customer/loginData')
            .then(res=>res.json())
            // .then(json=>console.log(json));
});


const productSlice = createSlice({
    name: "Products",
    initialState:{
        email : [],
        phone: [],
        error : null,
        Dob : [],
        gender : [],
        name : [],
        address : [],
    },
    extraReducers:{
        [fetchProducts.pending]:(state,action) =>{
            state.loading = true
        },
        [fetchProducts.fulfilled]:(state,action) =>{
            state.loading = false;
            state.Products = action.payload
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        },

    }
})

export default productSlice.reducer;