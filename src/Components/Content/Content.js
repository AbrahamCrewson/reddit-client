import React from "react";
import './Content.css';
import Post from '../Post/Post.js';
class Content extends React.Component{
   

    render(){
        return (
            <div className="Content">
               <div className="Posts">
                {
                    this.props.results.map(post=>{
                        return <Post data={post} key={post.id} onComment={this.props.onComment} comments={this.props.comments} />
                    })
                }
               </div>
            </div>
        );
    }
}
export default Content;