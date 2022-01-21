import { useState, useEffect} from "react";
import AnimateHeight from "react-animate-height";


const Post = ({type, post}) => {

    const [height, setHeight] = useState(0);
    


    return (
        <li className="recent-post">
            <div className="recent-post-title">
                <a href={post.url_for_post}>{post.title}</a>
            </div>
            <div className="recent-post-topics">
                {post.associated_topics?.map((topic, idx) => (
                    <span className="post-topic" key={idx}>{topic}</span>
                ))}
            </div>
        </li>
    )
}

export default Post;