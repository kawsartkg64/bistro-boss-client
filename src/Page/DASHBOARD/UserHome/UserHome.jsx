import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div>
             <h2 className="text-3xl">
                <span>Hi Welcome</span>
            </h2>
            {
                user?.displayName ? user.displayName:'Back'
            }
        </div>
    );
};

export default UserHome;