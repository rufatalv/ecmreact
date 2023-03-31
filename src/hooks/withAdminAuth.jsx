import useAdminAuth from "./useAdminAuth";


const WithAdminAuth = props => useAdminAuth(props) && props.children;

export default WithAdminAuth;