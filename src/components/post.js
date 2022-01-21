import { useState } from "react";
import AnimateHeight from "react-animate-height";


const Post = ({type, post}) => {

    const [height, setHeight] = useState(0);
    
    const renderTopics = () => {
        return post.associated_topics?.map((topic, idx) => {
            return <span className="post-topic" key={idx}>{topic}</span>
        })
    }

    const getNameForPostLink = (str) => {
        let lastSlash = str.lastIndexOf('/');
        let link = str.substring(lastSlash + 1, str.length);

        if ((lastSlash + 1) === str.length) {
            link = str.slice (0, lastSlash);
            lastSlash = link.lastIndexOf('/');
            link = str.substring(lastSlash + 1, str.length -1);
        }

        if (link.includes('.html')) {
            link = link.substring(0, link.length - 5);
        }
        if (link.includes('.htm')) {
            link = link.substring(0, link.length - 4);
        }

        return link;
    }

    const renderLinks = () => {
        let links = post.post_links.map((post_link, index) => {
            return (
                <div className="post-link" key={index}>
                    <div className="post-link-box">

                    </div>
                    <div className="post-link-link">
                        <a href={post_link.link_url}>{getNameForPostLink(post_link.link_url)}</a>
                    </div>
                </div>
            )
        })

        return links || (<div className="no-content">No Post links</div>)
    }

    
    if (type === 'recent') {
        return(
            <li className="recent-post">
                <div className="recent-post-title">
                    <a href={post.url_for_post}>{post.title}</a>
                </div>
                <div className="recent-post-topics">
                    {renderTopics()}
                </div>
            </li>
        )
    } else if (type === 'result') {
        return (
            <li className="result-post"
                onMouseEnter={() => setHeight(70)}
                onMouseLeave={() => setHeight(0)}
            >
                <div className="result-post-topics">
                    {renderTopics()}
                </div>
                <div className="result-post-title">
                    <a href={post.url_for_post}>
                    {post.title}
                    </a>
                </div>

                <AnimateHeight 
                duration={500}
                height={height}>
                    <div className="result-post-links">
                        {renderLinks()}
                    </div>
                </AnimateHeight>
            </li>
        )
    }
    
}

export default Post;