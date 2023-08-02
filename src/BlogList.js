/*
 * @Author: zixuan.he hzx1125@outlook.com
 * @Date: 2023-07-28 15:39:25
 * @LastEditors: zixuan.he hzx1125@outlook.com
 * @LastEditTime: 2023-08-02 07:26:23
 * @FilePath: \dojo-blog\src\BlogList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const BlogList = ({ blogs, title }) => {


    // or
    // const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                
                <div className="blog-preview" key={ blogs.id }>

                    
                    <h3>{ blog.title }</h3>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>
                    {/* <button onClick={ () => deleteBlog(blog.id) }>Delete</button> */}
                </div>
            ))}
        </div>


     );
}
 
export default BlogList;