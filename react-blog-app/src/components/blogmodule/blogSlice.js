import { createSlice } from "@reduxjs/toolkit";
import {sub} from "date-fns";

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
                title,
                content,
                userId,
                userName,
                date:sub(new Date(),{minutes:0}).toISOString(),
                reactions:{
                    thumbsup: 0,
                    love:0 ,
                    wow: 0,
                    clap: 0,
                    funny:0 ,
                }
               }
               state.blogDetails.push(obj)
        },
        reactionBlog:(state,action)=>{
            const {id,reaction}=action.payload;
            const blog=state.blogDetails.find((b)=>b.blogId===id)
            if(blog){
                blog.reactions[reaction]++;
            }
        }

    }
    
})

export const selectBlogDetails=(state=>state.blogPost)
export const {addBlogDetails,reactionBlog}=blogSlice.actions
export default blogSlice.reducer