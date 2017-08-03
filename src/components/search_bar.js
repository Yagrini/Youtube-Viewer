import React from 'react';

 class SearchBar extends React.Component {

   constructor(props){
     super(props);
     this.state = { searchterm : ''};
   }

   render(){
     return (
       <div id="search">
        <input value={this.state.searchterm} onChange={event => this.setState({ searchterm : event.target.value})}
        onKeyPress={event => this.myfun(event)} id="input1"/>
        <button onClick={() => this.props.onSearchClick(this.state.searchterm)} id="mybutton"> <i className="fa fa-search" aria-hidden="true"></i></button>
       </div>
     );
   }
   myfun(e)
   {
     if(e.charCode==13) this.props.onSearchClick(this.state.searchterm);
   }
 }
 export default SearchBar;
