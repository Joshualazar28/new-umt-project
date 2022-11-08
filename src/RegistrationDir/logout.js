import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
const Logout = () => {
    const history = useHistory();
    useEffect(() => {
      history.push("/login")
        // Axios.get("http://localhost:3001/logout").then((Response) =>{  
        //   if(Response.data == "done"){
        //     history.push("/login")
        //   }
        // })
      }, [])
return(
    <div className="logout">
    </div>
);
}
 
export default Logout;  