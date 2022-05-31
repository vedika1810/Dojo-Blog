import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams(); //get parameter variable from route url 
    const {blogs} = useFetch('http://localhost:8000/blogs/'+id); // don't froget blogs/

    return ( 
        <div className="blog-details">
         { blogs && (
        <article>
          <h2>{ blogs.title}</h2>
          <p>Written by { blogs.author }</p>
          <div>{ blogs.body }</div>
        </article>
      )}
      

        </div>
     );
}
 
export default BlogDetails;