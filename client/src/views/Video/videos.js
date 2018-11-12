import React, { Component } from 'react';
import { Player } from 'video-react';
import { connect } from 'react-redux';
import "../../../node_modules/video-react/dist/video-react.css";
import { Row, Col, Container } from 'reactstrap';
import "../../assets/css/demo.css";
import './App.css'
import AdCorner from '../../views/Home/component/adComponent';
import loader from '../../images/loading_blue.gif';
import FB_Int from '../../components/Intergration/FB_Int';

class PlayerExample extends Component {
  render() {
    const { videos } = this.props;
    console.log('VID', videos)
    return (
      <div style={{paddingTop: 100}}>
        <Container className="Container">
          <Row>
            <Col md='9'>
        {videos ? <div >
          {
            videos.map((VID) => {
              return (
                <div className="videosDiv" >
                <h1>{VID.title}</h1>
                <Player className="videoContainer">
                  <source src={VID.video} />
                </Player>
                <hr />
                </div>
               
              )
            })
           }
         </div>
          :
          <img className = "loader" src= {loader} style={{position: 'absolute', paddingVertical:50}}/>
        }
     
  </Col>
  <Col md='3'>
              <AdCorner />
              <FB_Int />
           
            </Col>
            </Row>
            </Container>
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