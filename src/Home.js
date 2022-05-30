import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const { blogs} = useFetch('http://localhost:8000/blogs'); //4]custom hook part (from part 2)

    return ( 
        <div className="home">
        {blogs && <BlogList BP = {blogs} ParentTitle="All Blogs!"/>}
        </div>
     );
}
 
export default Home;