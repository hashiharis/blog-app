import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogDetails, selectBlogDetails } from "./blogSlice";
import { getCurrentUserId, selectAllUsers } from "../usermodule/userSlice";
import "./blog.css";
import { Timeago } from "../timeagomodule/Timeago";
import { ReactionButton } from "../reactionbuttons/ReactionButtons";

export const Blog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    userId: 0,
    userName: "",
    date:""
  });
  const { blogDetails } = useSelector(selectBlogDetails);
  const { userDetails, currentUserId } = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (blogData.title && blogData.content) {
      const currentUser = userDetails.find((user) => user.id === currentUserId);
      if (!currentUser) {
        alert("User not found");
        return;
      }
      const updatedblogData = {
        ...blogData,
        userId: currentUser.id,
        userName: currentUser.name,
      };

      dispatch(addBlogDetails(updatedblogData));
      setBlogData({
        ...blogData,
        title: "",
        content: "",
        userId: 0,
        userName: "",
        date:""
      });
    } else {
      alert("Please fill both title and content");
    }
  };
  return (
    <div className="blog-section">
      <div className="blog-fields">
      <p>Select User</p>
                <select onChange={(e)=>{
                    dispatch(getCurrentUserId(parseInt(e.target.value)))
                }}>
                    {
                        userDetails.map((u,index)=>{
                          return  <option key={index} value={u.id}>{u.name}</option>
                        })
                    }

                </select>
        <input
          type="text"
          placeholder="Title"
          value={blogData.title}
          onChange={(e) => {
            setBlogData({
              ...blogData,
              title: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Content"
          value={blogData.content}
          onChange={(e) => {
            setBlogData({
              ...blogData,
              content: e.target.value,
            });
          }}
        />
        <button onClick={handleClick}>Post</button>
      </div>
      {blogDetails.length > 0 && (
        <div className="blog-outer">
          {blogDetails.map((blog, index) => {
            return (
              <div key={index} className="blog-container">
                <h4>{blog.title}</h4>
                <h6>{blog.content}</h6>
                <p>Author Name:{blog.userName}</p>
                <Timeago timestamp={blog.date}/>
                <ReactionButton blog={blog}/>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
