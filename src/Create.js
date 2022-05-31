import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');

    const[loading,setloading] =useState(false);

    //routing 
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setloading(true);

        //sending data to json serever => fetch with two args
         fetch('http://localhost:8000/blogs',{
             method:'POST',
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(blog)
         }).then( () => {
             console.log('Submitted');
             setloading(false);
             history.push("/"); //routing
         })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            {/* submitting a form (POST REQUEST TO JSON SERVER) */}
            <form onSubmit={handleSubmit}> 
                <label>Blog title:</label>
                <input
                type="text"
                value={title}
                onChange = { (e)=>{setTitle(e.target.value)}}
                required
                >
                </input>

                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange = { (e)=>{setBody(e.target.value)}}>
                </textarea>

                <label>Author:</label>
                <select
                value={author}
                onChange = { (e) => {setAuthor(e.target.value) }}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>

                {loading ?<button disabled>Adding Blog</button> :<button>Add Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;