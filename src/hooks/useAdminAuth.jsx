import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserIsAdmin } from "../utils";

const mapState = ({user}) => ({
    currentUser: user.currentUser,
})

const useAdminAuth = props => {
    const {currentUser} = useSelector(mapState);
    const navigate = useNavigate();
    useEffect(() => {
        if(!checkUserIsAdmin(currentUser)){
            navigate('/auth')
        }
    }, [currentUser,navigate])
    return currentUser;
}

export default useAdminAuth;