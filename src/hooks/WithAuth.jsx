import useAuth from "./useAuth";

const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;