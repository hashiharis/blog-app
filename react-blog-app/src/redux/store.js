import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../components/usermodule/userSlice'
import blogSlice from '../components/blogmodule/blogSlice'


export const store=configureStore(
    {
        reducer:{
            user:userSlice,
            blogPost:blogSlice
        }
    }
)