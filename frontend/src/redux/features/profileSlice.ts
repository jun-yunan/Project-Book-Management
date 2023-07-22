import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateProfile {
    isEditPersonInformation: boolean;
}

const initialState = {
    isEditPersonInformation: false,
} as InitialStateProfile;

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        handleEditPersonInformation: (state) => {
            state.isEditPersonInformation = !state.isEditPersonInformation;
        },
    },
});

export const { handleEditPersonInformation } = profileSlice.actions;

const profileReducer = profileSlice.reducer;
export default profileReducer;
