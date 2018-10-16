import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import { Link} from 'react-router-dom';

class Navbar1 extends React.Component {
  render() {
    return (
      <div>
        <Nav className='Navbar1'>
          <NavItem>
            <Link to='/Home'>
            <NavLink >Home</NavLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to="/News">
            <NavLink >News</NavLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to="/Entertainment">
            <NavLink >Entertainment</NavLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to="/Sport">
            <NavLink >Sport</NavLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to="/CommunityService">
            <NavLink>Community Service</NavLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to="/Classified">
            <NavLink >Classified</NavLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to="/Video">
            <NavLink>Video</NavLink>
            </Link>
          </NavItem>
        </Nav>   
      </div>
    );
  }
}

export default Navbar1;