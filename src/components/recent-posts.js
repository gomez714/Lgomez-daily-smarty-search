import { useState, useEffect } from "react";
import axios from "axios";


const RecentPosts = () => {

    const [recentPosts, setRecentPosts] = useState([]);

    useEffect( () => {
        fetchRecentPosts();
    }, []);

    const fetchRecentPosts = async () => {
        const res = await axios.get("https://api.dailysmarty.com/posts");
        setRecentPosts(res.data.posts);
    }

    return (
        <div className="recent-posts">
            <div className="recent-posts-wrapper">
                <div className="recent-posts-heading">
                    Recent Posts
                </div>
                <ul className="recent-posts-posts">
                    {recentPosts.map((post) => (
                        <p>{post.title}</p>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecentPosts;