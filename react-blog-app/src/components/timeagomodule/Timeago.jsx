import { formatDistanceToNow, parseISO } from "date-fns";

export const Timeago=({timestamp})=>{
    let timeAgo="";
    if(timestamp){
        const date=parseISO(timestamp);
        const timePeriod=formatDistanceToNow(date);
        timeAgo=`${timePeriod} ago`
    }
    return(
       <span className="time-ago" style={{fontSize:"0.8rem"}}>
        <i>{timeAgo}</i>
       </span> 
    )
}