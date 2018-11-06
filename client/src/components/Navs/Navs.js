import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import logo from '../../images/logo.png';

class Navs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getId(id){
    this.props.fetchArticleByCat(id);
  }
  render() {
    const {category, user} = this.props;
    var mainCategories = [];
    for (var i = 0;  i < 4; i++){
      mainCategories.push(this.props.category[i]);
    }

    console.log("main",mainCategories)
    return (
      
      <Navbar expand="md" style={{ height: 70, width: '100%', position: 'fixed', zIndex: 1050, backgroundColor: '#263238', marginBottom: 100 }} >
        <NavbarBrand href="/">
          <img src={logo} alt="Soweto Observer Logo" style={{ height: 50, width: 'auto' }} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/" className="nav-link"><i className="fa fa-home"></i> Home</NavLink>
              </NavItem>
             
              {category?
                mainCategories.map((cat, i)=>{
                  return(
                     <NavItem onClick={()=>{this.getId(cat._id)}}><NavLink key={i} to="/category"  className="nav-link">{cat.name}</NavLink></NavItem>
                  )
                })
                :null
              }
           <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 More Options
                </DropdownToggle>
                <DropdownMenu right>

              <Link to="/category">          
              {category?
                category.map((cat, i)=>{
                  return(
                  // 
                    <DropdownItem key={i} onClick={()=>{this.getId(cat._id)}}>
                     {cat.name}
                   </DropdownItem>
                  //  
                  )
                })
                :<div>loading</div>
              }</Link>

                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/About" className="nav-link">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/videos" className="nav-link">video</NavLink>
              </NavItem>
              {user?(this.props.user.role === "admin") &&<NavItem>
                <NavLink to="/admin" className="nav-link">Manage</NavLink>
              </NavItem>
              :null
            }


              {!this.props.user && <NavItem>
                <a href="/auth/google" className="nav-link">Login</a>
              </NavItem>}
              {this.props.user && <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src={this.props.user.picture} alt="not supported" style={{height: 20, width: 'auto', borderRadius: 30}} /> {this.props.user.displayName}
                </DropdownToggle>
                <DropdownMenu right>
                  
                  <DropdownItem classNme="nav-link" href="/auth/logout">
                    Logout
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>}
          </Nav>
        </Collapse>
      </Navbar>
      
    );
  }
}

function mapStateToProp(state) {
  return {
      user: state.auth,
      category: state.category
     
  }
}

export default connect(mapStateToProp, actions)(Navs);