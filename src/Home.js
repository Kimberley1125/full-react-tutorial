/*
 * @Author: zixuan.he hzx1125@outlook.com
 * @Date: 2023-07-28 14:45:24
 * @LastEditors: zixuan.he hzx1125@outlook.com
 * @LastEditTime: 2023-08-02 15:00:34
 * @FilePath: \dojo-blog\src\Home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {

    
    // data: blogs means retrieve the argument 'data' and as 'blogs' in this function
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ])

    // const deleteBlog = (id) => {
    //     // delete a blog is like to update a new blog list
    //     const newBlogs = blogs.filter((blog) => blog.id !== id );
    //     setBlogs(newBlogs);
    // }

    const [nameEffect, setName] = useState('Yezi');

    // const changeNameEffect = = setName('Kimberley'); ()

    // useEffect(() => {
    //     console.log('use effect run');
    //     console.log(nameEffect);
    // }, [nameEffect])


    // Using useEffect to fetch data -- Only when get data and setData in the state, can trigger the useEffect to render the data on the page
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs') 
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw Error('Couldn\'t fetch the data');
    //             }

    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIsPending(false);
    //         })
    //         .catch(err => {
    //             setError(err.message);
    //             setIsPending(false);
    //         });
    //     }, 1000)
        
    // }, [])



    return ( 
        <div className="home">
            {/* using {} to output the variable
            1. use map to list all the content in the blogs
            2. use a callback function (blog => ()) to pass the argument
            3. use the key to store the uuid! it's important!
            4. use blog.XX to get the attributes in the content */}
            {/* {blogs.map(blog => (
                <div className="blog-preview" key={ blogs.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>
                </div>
            ))} */}

            {/* -----------------props---------------------- */}
            {/* <BlogList blogs = { blogs } title = "All blogs: " deleteBlog = { deleteBlog }/> */}
            {/* <BlogList blogs = { blogs.filter((blog) => blog.author === "mario") } title = "Mario's blogs: " deleteBlog = { deleteBlog }/>  */}
            
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }

            {/*------------------ Use useEffect to display the data --------------*/}
            {/* Attention!: add 'blogs &&' to the left to ensure that if the blogs is null the expression in the right will not happen  */}
            { blogs && <BlogList blogs={ blogs } title="All Blogs" /> }


            <button onClick={() => setName('Kimberley')}>Change name - effect</button>
            <p>{ nameEffect }</p>



        </div>
     );
}
 
export default Home;