import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    est: "",
    sn: "",
    area: "",
    error: null
};

const provisionSlice = createSlice({
    name: 'provision',
    initialState,
    reducers: {
        provisionRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        provisionSuccess: (state, action) => {
            state.loading = false;
        },
        provisionFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { provisionRequest, provisionSuccess, provisionFailure } = provisionSlice.actions;
export default provisionSlice.reducer;
