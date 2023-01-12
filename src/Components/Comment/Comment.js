import React from 'react';
import './Comment.css';
import commentIcon from '../Images/comments.png';
import author from '../Images/author.png';

class Comment extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
        this.handleComment= this.handleComment.bind(this);
        if(this.props.data.replies){
           
            this.state.comments = this.props.data.replies.data.children.slice(0,10).map(reply=>{
                
            return<div className='Secondary-comment' key={reply.data.id}><Comment data={reply.data} key={reply.data.id} onComment={this.props.onComment}/></div>;
             });
 
         }
    }
    handleComment(){
        
        if(document.getElementById(this.props.data.id).style.display!=='inline'){
            document.getElementById(this.props.data.id).style.display = 'inline';
        }
        else{
            document.getElementById(this.props.data.id).style.display = 'none';
            
        }
    }
    render(){
        return(
            <div>
            <div className='Comment'>
                <div className='First'>
                    <div className='upvotes'>
                        <h5>{this.props.data.score}</h5>
                        <h6>Upvotes</h6>
                    </div>
                    <div className='body'>
                        <h5>{this.props.data.body}</h5>
                    </div>
                </div>
                <div className="Second">
                    <div>
                        <button><img id="comment-author" src={author}></img></button>
                        <h6>{this.props.data.author}</h6>
                    </div>
                    <div >
                        <h6>{this.state.comments.length}</h6>
                        <button onClick={this.handleComment}><img id="comment-comments" src={commentIcon}></img></button>
                    </div>
                    
                </div>
            
            </div>
            <div className='Secondary' id={this.props.data.id}>
                {
                    this.state.comments.map(comment=>{
                        return comment;
                    })
                }
            </div>
            </div>
        );
    }
}
export default Comment;