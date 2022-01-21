
import Post from "./post";


const ResultsPosts = ({posts}) => {
    
    return (
        <div className="results-posts">
            <div className="results-posts-wrapper">
                <ul className="results-posts-posts">
                    {posts?.map((post,idx) => {
                        return <Post type="result" key={idx} post={post}/>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default ResultsPosts;