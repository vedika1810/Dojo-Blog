import React from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = React.useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])   

      const handleDelete =(id) =>{
          //2 !== 2 => false anything in filter (false) will be removed 
       const newBlogs = blogs.filter(B => B.id !== id ); 
       setBlogs(newBlogs);
      }

    return ( 
        <div className="home">
        <BlogList BP = {blogs} ParentTitle="All Blogs!" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;