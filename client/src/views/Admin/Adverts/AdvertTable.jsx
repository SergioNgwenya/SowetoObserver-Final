import React from 'react';
import ReactTable from "react-table";
//import {Link} from 'react-router-dom';
import 'react-table/react-table.css'
import { Row, Col, Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody, Label, Input, FormGroup, ModalFooter,
Nav, NavItem, Navbar, NavLink, Button
} from 'reactstrap';
import { PanelHeader } from '../../../components';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import MDSpinner from "react-md-spinner";
//IMporting all icons from fontAwesome
import * as FontAwesome from 'react-icons/lib/fa';
import AddAdvert from './AddAdvert';

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
class Advert extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      advert: false,
      category: false,
      author: false,
      isOpen: false,
      add: false
      //data: makeData()
     
    }
    
    this.closeModal = this.closeModal.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }
  //Components
 

  fetchAdvert(id){
this.props.fetchAdvert(id); 
console.log(this.props.fetchAdvert);



  }
  toggleAdd() {
    this.setState({ add: !this.state.add });
  }
  //Handling the action buttons 
  onHandleEdit(id) {
    // alert("Edit record " + id);
    this.setState({ isOpen: true })
  }
  onHandleDelete(id) {
    this.props.fetchAdvert(id);//Query to the redux fetcing object data for single id
    this.setState({ confirm: true });
    
  }
  onDelete() {
    
    this.props._deleteAdvert(this.props.advert._id)
    this.setState({ confirm: !this.state.confirm }) 
    
    this.props.fetchAdvert();
    console.log(this.props._deleteAdvert);
}

  closeModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { adverts } = this.props;
    console.log(this.props);
    const columns = [{
      Header: "#",
      id: "row",
      maxWidth: 50,
      filterable: false,
      Cell: (row) => {
        return <div>{row.index + 1}</div>
      }
    }, {
      Header: 'Title',
      accessor: 'title',
    }, {
      Header: 'Picture',
      Cell: (row) => {
        return <div>
          <img height={34} src={row.original.picture} style={{ height: 40, width: 'auto' }} alt={"not suppoted"} />
        </div>
      },
      //id: "picture"
    }, {
      Header: "URL",
      accessor: "url",
    }, {
      Header: 'Action',
      maxWidth: 70,
      Cell: row => (
        <div>
          <span onClick={this.onHandleDelete.bind(this, row.original._id)}><FontAwesome.FaTrash /></span>
        </div>
      )
    }]
    return (
      <div>
        <PanelHeader size="sm" />
        <AddAdvert open={this.state.add} close={this.toggleAdd} />
        <div className="content">
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
                    data={adverts}
                    resolveData={data => data.map(row => {
                      row.createdAt = moment(row.createdAt).format('MMM Do YYYY, h:mm a');
                      return row;
                    })}
                    columns={columns}
                    
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Modal starts here */}
        <Modal isOpen={this.state.isOpen} toggle={() => { this.setState({ isOpen: !this.state.isOpen }) }} size="lg">
          <ModalHeader> Editing Advert information </ModalHeader>
          <ModalBody>
            

            <FormGroup>
              <Label for="advert">Advert</Label>
              <Input type="text" onChange={(e) => { this.setState({ title: e.target.value }) }} name="advert" id="advert" />
            </FormGroup>

            <FormGroup>
              <Label for="url">URL</Label>
              <Input type="textarea" onChange={(e) => { this.setState({ url: e.target.value }) }} name="textarea" id="textarea" />
            </FormGroup>

            <FormGroup>
              <Label for="picture">Picture</Label>
              <Input type="file" onChange={(e) => { this.setState({ picture: e.target.value }) }} sm={2} name="file" id="File" />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button outline >Save Changes</Button>
            <Button outline onClick={this.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
       
        {/* Modal used to confirm delete */}
        <Modal isOpen={this.state.confirm} toggle={()=>{this.setState({ confirm: !this.state.confirm})}}>
                  
                  <ModalHeader>Delete confimartion</ModalHeader>
                      <ModalBody>
                          <p> Are you sure you want to delete <b>
                              { this.props.advert ? 
                                  this.props.advert.title : 
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
    );
  }
}

function matchDatesToProps(state) {
  return {
    advert: state.Adver,
    adverts:state.adverts

    
  }
}
export default connect(matchDatesToProps, actions)(Advert);