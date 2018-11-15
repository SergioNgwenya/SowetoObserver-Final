import React, { Component } from 'react';
import { Player } from 'video-react';
import { connect } from 'react-redux';
import "../../../node_modules/video-react/dist/video-react.css";
<<<<<<< HEAD
import {  Row, Col } from 'reactstrap';
// import "../../../node_modules/video-react/dist/video-react.css";
import  './App.css'

 class PlayerExample extends Component {
 
=======
import { Row, Col, Container } from 'reactstrap';
import "../../assets/css/demo.css";
import './App.css'
import AdCorner from '../../views/Home/component/adComponent';
import loader from '../../images/loading_blue.gif';
import FB_Int from '../../components/Intergration/FB_Int';

class PlayerExample extends Component {
>>>>>>> d7104434029a944d0208b79d44b06eb47f31f2bf
  render() {
    const { videos } = this.props;
    console.log('VID', videos)
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> d7104434029a944d0208b79d44b06eb47f31f2bf
    );
  }
}
function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(PlayerExample);