import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userDetails:[
             {
            id:Math.floor(Math.random()*1000),
            name:"Mark",
    },
    {
         id:Math.floor(Math.random()*1000),
         name:"Tom",
    }
    ],
    currentUserId:null
}

initialState.currentUserId=initialState.userDetails[0].id
export const userSlice=createSlice(
    {
        name:"userData",
        initialState,
        reducers:{
            getCurrentUserId:(state,action)=>{
                state.currentUserId=action.payload;
            }
        }

    }
)

export const selectAllUsers=(state=>state.user)
export const {displayUser,getCurrentUserId}= userSlice.actions
export default userSlice.reducer;