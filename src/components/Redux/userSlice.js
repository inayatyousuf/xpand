import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState: {
        user:null,
    },
    reducers: {
        login:(state, action) => {
              if(action.payload.name==="inayatyousuf77@gmail.com" && action.payload.password==="hello" || action.payload.name==="iqsambashir@gmail.com" && action.payload.password==="hello1"|| action.payload.name==="aashubashir@gmail.com" && action.payload.password==="hello2"){
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