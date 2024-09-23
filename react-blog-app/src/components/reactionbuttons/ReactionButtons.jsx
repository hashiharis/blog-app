import { useDispatch } from "react-redux";
import { reactionBlog } from "../blogmodule/blogSlice";

// eslint-disable-next-line react/prop-types
export const ReactionButton = ({blog}) => {

    const dispatch=useDispatch()
  const reactionEmojis = {
    thumbsup: "👍",
    love: "❤️",
    wow: "😮",
    clap: "👏",
    funny: "😂",
  };

  const reactionBtns=Object.entries(reactionEmojis).map(([name,emoji])=>{

    return(
        <button key={name} onClick={()=>dispatch(reactionBlog({id:blog.blogId,reaction:name}))} style={{backgroundColor:"#333333",border:"none",color:"white", paddingBlock:"0.5em"}}>
         {emoji}{blog.reactions[name]}
        </button>
    )
  })
  return <div>{reactionBtns}</div>;
};
