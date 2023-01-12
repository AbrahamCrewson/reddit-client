import React from 'react';
import './App.css';
import Content from '../Content/Content.js';
import Subreddits from '../Subreddits/Subreddits.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Reddit from '../util/Reddit';
import ScrollButton from '../ScrollButton/ScrollButton';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      content: [],
      comments: [],
      contentLoading:true,
      
    }
    this.load = this.load.bind(this);
    this.search = this.search.bind(this);
    this.see = this.see.bind(this);
    this.load('pics');
    
  }
  
  search(term){
    this.setState({contentLoading:true});
    Reddit.search(term).then(content =>{
      this.setState({contentLoading:false});
      this.setState({content:content})
    })
    
  }

  async load(subreddit){ 
    this.setState({contentLoading:true});
    await Reddit.load(subreddit).then(content =>{
      this.setState({contentLoading:false});
      this.setState({content:content}) 
      
    })
    
  }
  async see(permalink){
    
    await Reddit.see(permalink).then(comments =>{
      if(comments){
        this.setState({comments:comments}) 
      }
      
    })
    return this.state.comments;
    
  }
  render(){
    return (
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="Main">
          {this.state.contentLoading ? (<div id='loader'></div>):(
          <div className="Content"id="Content"><Content results={this.state.content} onComment={this.see} comments={this.state.comments} loading={this.state.commentLoading}/></div>
          )}
          <div className='Subreddits' ><Subreddits onSelect={this.load}/></div>
        </div>
        <ScrollButton/>
      </div>
    );
  }
}

export default App;
