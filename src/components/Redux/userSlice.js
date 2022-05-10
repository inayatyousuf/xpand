import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState: {
        user:null,
    },
    reducers: {
        login:(state, action) => {
              if(action.payload.name==="inayat" && action.payload.password==="hello"){
                state.user = action.payload;
              }else {
                  alert("No such user")
              }
                
            
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer