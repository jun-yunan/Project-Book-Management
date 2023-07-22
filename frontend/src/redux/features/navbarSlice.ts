import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    isShowNavbar: boolean;
}
const initialState = {
    isShowNavbar: false,
} as InitialState;
export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        handleShowNavbar: (state) => {
            state.isShowNavbar = !state.isShowNavbar;
        },
    },
});

export const { handleShowNavbar } = navbarSlice.actions;

const navbarReducer = navbarSlice.reducer;
export default navbarReducer;
