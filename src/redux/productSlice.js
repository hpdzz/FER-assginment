import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'https://birdsellingapi.azurewebsites.net/api/';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productSingle: [],
        isLoading: false,
    },
    reducers: {
        searchFilter: (state, action) => {
            state.products = state.products.filter((product) =>
                product.productName.toLowerCase().includes(action.payload.toLowerCase()),
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(fetchProductSingle.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductSingle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productSingle = action.payload;
        });
        builder.addCase(fetchProductSingle.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    try {
        const response = await axios.get(`${BASE_URL}Product/GetProduct`);
        const data = await response.data.data;
        // console.log(data);
        return data;
    } catch (error) {
        return error;
    }
});

export const fetchProductSingle = createAsyncThunk('product-single/fetch', async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}Product/GetProductByID/${productId}`);
        const data = await response.data.data;
        // console.log(data);
        return data;
    } catch (error) {
        return error;
    }
});
export const { searchFilter } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getProductSingle = (state) => state.products.productSingle;
export default productSlice.reducer;
