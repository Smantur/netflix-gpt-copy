import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "userSlice",
    initialState: null,
    reducers: {
        addUser(state, action) {
            return action.payload;//initialState value  get updated
        },

        removeUser(state, action) {
            return null;//initialState value  get updated

        }

    }


})
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
