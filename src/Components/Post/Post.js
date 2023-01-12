import React from 'react';
import './Post.css';
import comments from '../Images/comments.png';
import author from '../Images/author.png';
import Comment from '../Comment/Comment';
import loader from '../Images/loading.gif';
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: [],
            comments:[],
            loading: true
        }
        this.stringToHTML = this.stringToHTML.bind(this);
        this.stringToHTML(this.props.data.content);
        this.insertComments = this.insertComments.bind(this);
        console.log(this.props.data.id);
    }
    stringToHTML(str) {
        if(str){
        var dom = document.createElement('div');
        dom.innerHTML = str;
        this.setState({content: [dom.childNodes[0].nodeValue ]});
        
        
        }
    }
    
    async insertComments(){
        console.log(this.state.loading);
        if(this.state.loading===true){
            console.log(this.props.data.id + "loader")
            document.getElementById(this.props.data.id + "loader").style.display='flex';
            console.log('here');
            const results = await this.props.onComment(this.props.data.permalink);
            this.setState({comments:results});
            
            console.log(this.state.comments);
            this.setState((loading)=>({loading: false}));
            document.getElementById(this.props.data.id + "loader").style.display='none';
            document.getElementById(this.props.data.id).style.display = 'inline';
            
        }
        else{
            console.log("here1")
            if(document.getElementById(this.props.data.id).style.display!=='inline'){
            
                document.getElementById(this.props.data.id).style.display = 'inline';
            
            
            }
            else{
                
                document.getElementById(this.props.data.id).style.display = 'none';
                
            }
        }
        
        console.log(this.state.comments);
    };
    
    render(){
        return (
            <div>
            <div className='Post'>
                <div className='Top'>
                    <div className='score'>
                        <h6 id="prefix">{this.props.data.subreddit_name_prefixed}</h6>
                        <h5>{this.props.data.score}</h5>
                        <h6>Upvotes</h6>
                    </div>
                    <div className='Info'id="Info">
                        <a href={this.props.data.url} target="_blank"  rel="noreferrer"><h3>{this.props.data.title}</h3></a>
                        <p>{this.props.data.selftext}</p>
                        <img src={this.props.data.url} alt='' ></img>
                        <div className="content" id="vid"dangerouslySetInnerHTML={{__html: this.state.content}}  ></div>
                        
                    </div>
                </div>
                <div className="Bottom">
                    <div>
                        <button><img id="author" alt='author' src={author}></img></button>
                        <h6>{this.props.data.author}</h6>
                    </div>
                    
                    <div>
                        <h6>{this.props.data.num_comments}</h6>
                        <button onClick={this.insertComments}><img id="comments" alt='comments'src={comments}></img></button>
                    </div>
                </div>
                
            </div>
            <div id={this.props.id + "div"}>
                <div className="comment-loader" id={this.props.data.id + "loader"}><img src={loader}alt='Loading'></img></div>
                <div className='Comments'id={this.props.data.id} >
                
                {this.state.comments.map(comment=>{
                    
                    return <Comment data={comment} key={comment.id} onComment={this.props.onComment}/>;
                })
                
                }
                </div>
                
            </div>
            </div>
        )
    }
}
export default Post;