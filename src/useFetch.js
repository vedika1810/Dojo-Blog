import React, { useEffect,useState } from "react";

const useFetch = (url) => { //3]use url as fetch parameter 

    //1] paste all useEffect part and useState (in Home) here
    const [blogs, setBlogs] = useState(null)   

    const abortCont = new AbortController(); //useEffect cleanup

    useEffect( ()=>{
        fetch(url , { signal: abortCont.signal }) //useEffect cleanup
          .then(res => {
              return res.json();
          })
          .then(data => {
              setBlogs(data);
          })
         // return () => abortCont.abort(); useEffect cleanup

      },[url] );

      return {blogs}; //2] return values so that u can get in Home.js
}

export default useFetch;