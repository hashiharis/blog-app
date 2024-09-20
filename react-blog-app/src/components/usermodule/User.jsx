import { useDispatch, useSelector} from "react-redux"
import { getCurrentUserId } from "./userSlice"
import './user.css'

export const User=()=>{

    const{userDetails}=useSelector((state)=>state.user)
     const dispatch=useDispatch()
    return(
             <div className="user-container">
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
             </div>
    )
}