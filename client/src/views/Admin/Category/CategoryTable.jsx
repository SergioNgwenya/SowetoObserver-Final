import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import {
  Row, Col, Card, CardHeader, CardBody,
  Nav, NavItem, NavLink, Navbar,
  Modal, ModalHeader, ModalBody,ModalFooter,
} from 'reactstrap';
import MDSpinner from "react-md-spinner";
import { PanelHeader } from '../../../components';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
//Loading spinner
//IMporting all icons from fontAwesome
import * as FontAwesome from 'react-icons/lib/fa';
import AddCategory from './AddCategory';

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
//buttons for modal
const style = {
  paddingLeft: "50%",
}
const styleButton = {
  button: {
  borderColor: "#0ad14c",
  backgroundColor: "#ffffff",
  color: "#0ad14c",
  cursor: "pointer",
  borderWidth: ".9px",
  borderRadius: "30px",
  padding: "7px 25px",
  margin: "8px"
  },
}

const clearButton = {
  button: {
  borderColor: "#f96233",
  backgroundColor: "#ffffff",
  color: "#f96233",
  cursor: "pointer",
  borderWidth: ".9px",
  borderRadius: "30px",
  padding: "7px 25px",
  margin: "8px"
  },
}

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: false,
      description: false,
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
  onHandleDelete(id) {
    this.setState({ confirm: !this.state.confirm })
    this.props.fetchCat(id);
  }

  onHandleEdit(id) {
    // alert("Edit record " + id);
    this.setState({ isOpen: true })
  }

  //on delete function to delete
  onDelete() {
    
    this.props._deleteCategory(this.props.cat._id)
    this.setState({ confirm: !this.state.confirm }) 
    
    this.props.fetchCategory();
    console.log(this.props._deleteArticle);
}

  render() {
    const { category } = this.props;
    
   
    const columns = [{
      Header: '#',
      id: "row",
      maxWidth: 50,
      filterable: false,
      Cell: (row) => {
        return <div>{row.index + 1}</div>
      }
    }, {
      Header: "Name",
      accessor: "name",
      maxWidth: 200,
    }, {
      Header: "Description",
      accessor: "description",
    }, {
      Header: 'Date posted',
      accessor: "createdAt",
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
         {/* // <AddCategory open={this.state.add} close={this.toggleAdd} /> */}
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <Navbar color="dark" light expand="md">
                    <Nav navbar>
                       <NavItem>
                        <NavLink onClick={this.toggleAdd}><i className="now-ui-icons ui-1_simple-add"></i> Category</NavLink>
                      </NavItem> 
                    </Nav>
                  </Navbar>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    defaultPageSize={5}
                    className="-striped -highlight"
                    data={category}
                    columns={columns}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={this.state.confirm} toggle={()=>{this.setState({ confirm: !this.state.confirm})}}>
                  
                  <ModalHeader>Delete confimartion</ModalHeader>
                      <ModalBody>
                          <p> Are you sure you want to delete <b>
                              { this.props.cat ? 
                                  this.props.cat.name : 
                                    <div style={style}>
                                      <MDSpinner size="50" />
                                    </div>} 
                                  </b> ? 
                                </p>
                      </ModalBody>

                    <ModalFooter>
                        <button style={styleButton.button} onClick={this.onDelete.bind(this)} >Yes</button>
                        <button onClick={() => { this.setState({ confirm: !this.state.confirm }) }} style={clearButton.button} >No</button>
                    </ModalFooter>
            </Modal>
        </div>
      </div>
    );
  }
}
function matchDatesToProps(state) {
  return {
    category: state.category,
    articles: state.articles,
    cat: state.cat
  }
}
export default connect(matchDatesToProps, actions)(Category);
