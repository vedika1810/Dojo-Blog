import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams(); //get parameter variable from route url 
    const {blogs} = useFetch('http://localhost:8000/blogs/'+id); // don't froget blogs/

    const history = useHistory();

    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + blogs.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      }) 
    }


    return ( 
        <div className="blog-details">
         { blogs && (
        <article>
          <h2>{ blogs.title}</h2>
          <p>Written by { blogs.author }</p>
          <div>{ blogs.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      

        </div>
     );
}
 
export default BlogDetails;