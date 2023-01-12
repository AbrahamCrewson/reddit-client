import React from "react";
import './SearchBar.css';
import logo from "../Images/logo.png";
import searchLogo from "../Images/search.png";
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }
    search(){
        this.props.onSearch(this.state.term);
    }
    handleTermChange(event){
        this.setState({term: event.target.value})
    }
    handleKeypress (event){  
        if (event.key === 'Enter') {  
            this.search();   
         }  
    };
    render(){
        return (
            <div className="SearchBar">
                <img src={logo} alt="Reddit"/>
                <div className="Search">
                    <input type="text" placeholder="Search" onChange={this.handleTermChange} onKeyPress={this.handleKeypress}/>
                    <button onClick={this.search}><img src={searchLogo} alt="Search" /></button>
                </div>
                <div className="empty"></div>
            </div>
        );
    }
}
export default SearchBar;