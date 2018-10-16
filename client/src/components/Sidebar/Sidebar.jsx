import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import { Nav } from 'reactstrap';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import Logo from '../../images/logo.png';
var ps;
class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname === routeName ? 'active' : '';
    }
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.sidebar,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    render(){
        return (
            <div className="sidebar" data-color="orange">
                <div className="simple-text logo-normal">
                    <div className="logo">
                        <Link to="/admin" className="#">
                            <div className="logo-img">
                                <img src={Logo} alt="Soweto-logo" />
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="sidebar-wrapper" ref="sidebar">
                    <Nav>
                        {
                            this.props.routes.map((prop,key) => {
                                if(prop.redirect)
                                    return null;
                                return (
                                    <li className={this.activeRoute(prop.path) + (prop.pro ? " active active-pro":"")} key={key}>
                                        <NavLink to={prop.path} className="nav-link" >
                                            <i className={"now-ui-icons "+prop.icon}></i>
                                            <p>{prop.name}</p>
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </Nav>
                </div>
            </div>
        );
    }
}
export default Sidebar;
