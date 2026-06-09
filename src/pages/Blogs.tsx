import { Navigate } from "react-router-dom";

/** Legacy /blogs route — redirects to Gavite Foresight blog */
const Blogs = () => <Navigate to="/blog" replace />;

export default Blogs;
