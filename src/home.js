import { useState } from "react";
const Home = () => {
    const [blogs ,setBlogs] = useState([
      {title: 'My first website', body : 'Lorem ipsum for blog 1', author: 'Gman', id:1},
      {title: 'My second website', body :'Lorem ipsum for blog 2', author: 'ngeno', id:2},
      {title: 'My three website', body :'Lorem ipsum for blog 3', author: 'Grandgrimler', id:3},
      {title: 'My four website', body :'Lorem ipsum for blog 4', author: 'Milgo', id:4}
    ]) ; 
    return ( 
      <div className="home">
        {blogs.map((blog) =>(
<div className="preview" key={blog.id}>
  <h2 className="title"> {blog.title}</h2>
  <div className="author"> {blog.author}</div>
  <div className="body"> {blog.body}</div>
</div>
        ))}
      </div>
  
     );
}
 
export default Home;