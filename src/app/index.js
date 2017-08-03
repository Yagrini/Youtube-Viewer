import React from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/search_bar.js';
import VideoList from '../components/video_list.js';
import VideoDetail from '../components/video_detail.js'
const APIKEY = 'AIzaSyBS2IqXIGk1HX6YlnNqQkix_wJVg3Snb2g';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selected:null,
    };
    this.videoSearch('surfboards');
  }
  videoSearch(term)
  {
    YTSearch({key: APIKEY , term : term},(data) => {
      this.setState({videos : data , selected : data[0] });
    });
  }

  render(){
    return (
      <div className="container">
        <SearchBar onSearchClick={ tosearch => this.videoSearch(tosearch)} />
        <VideoDetail video={this.state.selected}/>
        <VideoList onVideoSelect = {(selected) => this.setState({selected})} videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
