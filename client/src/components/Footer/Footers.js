import React from 'react';
import { Container,NavItem,NavLink } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

class Footers extends React.Component{
    render(){
        return (
            <footer className={'footers'
            + (this.props.default ? " footer-default":"")
        }>
                <Container>

                    <div className="copyright">
                   
                     <a href="/">Home</a>&nbsp;&nbsp;&nbsp;     |     &nbsp;&nbsp;&nbsp;<a href="/About">About</a>    
                    
                    </div>
                    {/* <div class="social-icons">
                                
                                <ul class="nomargin">
                                
            <a href="https://www.facebook.com/Soweto-Observer-337066023393491/"><i class="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
            &nbsp;&nbsp;
            <a href="https://twitter.com"><i class="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
          &nbsp;&nbsp;
            <a href="https://plus.google.com"><i class="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
          &nbsp;&nbsp;
            <a href="mailto:robert@sowetoobserver.co.za"><i class="fa fa-envelope-square fa-3x social-em" id="social"></i></a>
                                
                                </ul>
                            </div> */}
                    
                    <div className="copyright">
                    
                    Copyright &copy; 2018 Soweto Observers Inc. All rights reserved | Design by Black Sparrows @ITthink </div>
                </Container>
            </footer>
        );
    }
}

export default Footers;
