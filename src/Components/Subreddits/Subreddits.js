import React from "react";
import './Subreddits.css';
import Add from '../Images/add.png';
class Subreddits extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: '',
            subs: ['Science','Pics','MadeMeSmile','Art','HumansBeingBros','Wholesome','UpliftingNews']
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }
    
    handleClick(event){
        this.props.onSelect( event.target.innerText);
        
    }
    handleAdd(event){
        this.setState(current => ({subs: [...current.subs,this.state.term]}));
    }
    handleKeypress (event){  
        if (event.key === 'Enter') {  
            this.setState(current => ({subs: [...current.subs,this.state.term]}));
            
         }  
    };
    handleTermChange(event){
        this.setState({term: event.target.value})
    }
    render(){
        return (
            <div id="Subreddits">
               <h1>Subreddits</h1>
               <div className="Subs" id="Subs">
                    {
                    this.state.subs.map(sub =>{
                        return <button onClick={this.handleClick}key={sub}><h2>{sub}</h2></button>;
                    })}
                    
               </div>
               <div className="Add">
                    <input placeholder="Add Subreddits" onChange={this.handleTermChange} onKeyPress={this.handleKeypress}></input>
                    <button onClick={this.handleAdd}><img src={Add}alt='Add'/></button>
                </div>
            </div>
        );
    }
}
export default Subreddits;