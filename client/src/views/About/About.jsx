import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


class About extends React.Component {
  render() {
    return (
      <div className="AboutPage" >
        <Container style={{ textAlign: 'center', fontFamily: 'Nova Flat'}}>

          <h2 className="Header">About Soweto Observer</h2>

          <br />
          <h4 className="Header">- Background -</h4>
          <p ><i>Soweto Observer is a local community newspaper that covers news in Soweto. The newspaper is 100% owned by The Genial Media Group. Its founders are young people from different walks of life. It Started its print publication in August 2017 which is running to date. </i></p>
          <br />

          
          <h4 className="Header">- Mission and Vision -</h4>
          <p><i>We aim to serve our community with news that are truthful, objective and fair. Soweto Observer is not affilated to any political party. We uphold high standards of journalism. We hope to reach out to the youth and the community as a whole.</i></p>
          <br />

          <h4 className="Header">- Location -</h4>
          <div className="map">
            <div className="mapouter"><div className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114563.15626281998!2d27.64050755203618!3d-26.193469554507956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a6b1e2746071%3A0x3a0838c21e9e6ddf!2sSoweto!5e0!3m2!1sen!2sza!4v1539245858758" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><a href="https://www.pureblack.de/webdesign-bremen/"></a></div>
          </div>
       
          <br/>
          <h4 className="Header" >Contact Details</h4>
          <i>081 7595 432</i>
          <br/>
          <i>063 4515 871</i>
          <br/>
          <i>Info@sowetoobserver.co.za</i>
          <br/>
          <i>Robert@sowetoobserver.co.za</i>
          <br/>

        </Container>
      </div>
    );
  }
}
export default About;