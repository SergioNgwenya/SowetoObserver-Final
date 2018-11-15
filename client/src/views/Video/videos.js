import React, { Component } from 'react';
import { Player } from 'video-react';
import { connect } from 'react-redux';
import "../../../node_modules/video-react/dist/video-react.css";
import {  Row, Col } from 'reactstrap';
// import "../../../node_modules/video-react/dist/video-react.css";
import  './App.css'

 class PlayerExample extends Component {
 
  render() {
    const { videos } = this.props;
        console.log('VID', videos)
    return (
      <Row>
        <Col>
      <div className="div">
      {videos ? <div >
        {
videos.map((advert) => {
                return (        
       <Player >
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
       </Col>
       </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(PlayerExample);