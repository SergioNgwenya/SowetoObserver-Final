import React, { Component } from 'react';
import { Player } from 'video-react';
import { connect } from 'react-redux';
// import "../../../node_modules/video-react/dist/video-react.css";


import  './App.css'

 class PlayerExample extends Component {
 
  render() {
    const { videos } = this.props;
        console.log('VID', videos)
    return (
      <div className="container">

      <div className="div">
      {videos ? <div >
        {

videos.map((advert) => {
                return (
                  
      <Player style={{height:10}}>
       <h1>Latest videos</h1>
      <source src={advert.video} />
        </Player>
                
                )
            })

        }

    </div>

        :

        <div>loading.....</div>

    }
    </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {


    videos: state.videos
  }
}

export default connect(mapStateToProps)(PlayerExample);