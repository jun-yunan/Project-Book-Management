import { PayloadActionUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentUser {
    _id: string;
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    createdAt: string;
    avatar: string;
    isLogin: boolean;
}

interface InitialState {
    currentUser: ICurrentUser;
}

const initialState = {
    currentUser: {
        _id: '',
        accessToken: '',
        email: '',
        name: '',
        refreshToken: '',
        createdAt: '',
        avatar: '',
        isLogin: false,
    } as ICurrentUser,
} as InitialState;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setInfoUser: (state, action: PayloadAction<PayloadActionUser>) => {
            state.currentUser._id = action.payload._id;
            state.currentUser.name = action.payload.name;
            state.currentUser.accessToken = action.payload.accessToken;
            state.currentUser.refreshToken = action.payload.refreshToken;
            state.currentUser.email = action.payload.email;
            state.currentUser.createdAt = action.payload.createdAt;
            state.currentUser.avatar = action.payload.avatar;
            state.currentUser.isLogin = true;
        },
        logOut: (state) => {
            state.currentUser = initialState.currentUser;
        },
    },
});

export const { setInfoUser, logOut } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
