const BlogList = (props) => {

    const blog = props.BP;
    const title = props.ParentTitle;
    //const Delete = props.handleDelete;

    return ( 
        <div className="blog-list">
        <h2>{title}</h2>
             { blog.map((B)=>(
             <div className="blog-preview" key={B.id}>
             <h2>{B.title}</h2>
             <p>Written By {B.author}</p>
             {/* <button onClick={ () => Delete(B.id) }>delete Blog</button> */}
             </div>
         ))}

        </div>
     );
}
 
export default BlogList;