import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {Row, Col, Card, CardHeader, CardBody,
  Nav, NavItem, NavLink, Navbar} from 'reactstrap';
import { PanelHeader } from '../../../components';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
//Loading spinner
//IMporting all icons from fontAwesome
import * as FontAwesome from 'react-icons/lib/fa';
import AddAdvert from './AddAdvert';

//style for icons
const styleIcons = {
  button: {
    borderColor: "rgba(0,0,0,0.03)",
    backgroundColor: "rgba(0,0,0,0.03)",
    color: "#0d0e0f",
    cursor: "pointer",
    borderWidth: ".1px",
    borderRadius: "50px",
    margin: "2px",
    position: "center",
    decoration: "none",
  },
}

class Advert extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title: false,
      url: false,
      isOpen: false,
      add: false
    }

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({ add: !this.state.add })
  }
  //Components
  componentDidMount() {
  }
  //Handling the action buttons 
  onHandleEdit(id) {
    this.setState({ isOpen: true })
  }
  onHandleDelete(id) {
    alert("Delete record number " + id);
  }

  render() {
    const { Advert } = this.props;
    const columns = [{
      Header: '#',
      id: "row",
      maxWidth: 50,
      filterable: false,
      Cell: (row) => {
        return <div>{row.index + 1}</div>
      }
    }, {
      Header: "title",
      accessor: "title",
      maxWidth: 200,
    }, {
      Header: "URL",
      accessor: "url",
    }, {
      Header: 'picture',
      accessor: "picture",
      maxWidth: 300,
    }, {
      Header: 'Action',
      maxWidth: 70,
      Cell: row => (
        <div>
          <span style={styleIcons.button} onClick={this.onHandleDelete.bind(this, row.original._id)}><FontAwesome.FaTrash /></span>
          <span style={styleIcons.button} onClick={this.onHandleEdit.bind(this, row.original._id)}><FontAwesome.FaEdit /></span>
        </div>
      )
    }]
    //  console.log(articles)
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <AddAdvert open={this.state.add} close={this.toggleAdd} />
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <Navbar color="dark" light expand="md">
                    <Nav navbar>
                      <NavItem>
                        <NavLink onClick={this.toggleAdd}><i className="now-ui-icons ui-1_simple-add"></i> Advert</NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    defaultPageSize={5}
                    className="-striped -highlight"
                    data={Advert}
                    columns={columns}
                  />
                </CardBody>
                
              </Card>
            </Col>
          </Row>

        </div>
      </div>
    );
  }
}
function matchDatesToProps(state) {
  return {
    Advert: state.Advert
  }
}
export default connect(matchDatesToProps, actions)(Advert);