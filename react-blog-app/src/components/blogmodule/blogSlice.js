import { createSlice } from "@reduxjs/toolkit";

const initialState={
    blogDetails:[]
}

export const blogSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{

        addBlogDetails:(state,action)=>{
            let {title,content,userId,userName}=action.payload
            let obj={
                blogId: state.blogDetails.length+1,
                title:title,
                content:content,
                userId:userId,
                userName:userName
               }
               state.blogDetails.push(obj)
        }

    }
    
})

export const {addBlogDetails}=blogSlice.actions
export default blogSlice.reducer