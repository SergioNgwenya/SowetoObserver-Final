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
//IMporting all icons from fontAwesome
import MDSpinner from "react-md-spinner";
import * as FontAwesome from 'react-icons/lib/fa';
import AddVideo from './AddVideo';
import ReactPlayer from 'react-player';

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

class Videos extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      video: false,
      category: false,
      author: false,
      isOpen: false,
      add: false,
      title:false,
    
      //data: makeData()
    }
    this.closeModal = this.closeModal.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }
  //Components
  
  toggleAdd() {
    this.setState({ add: !this.state.add });
  }
  //Handling the action buttons 
  onHandleEdit(id) {
    alert("Edit record " + id);
  }
  onHandleDelete(id) {
    
    this.props._deleteVideo(this.props.video._id)
    this.setState({ confirm: !this.state.confirm }) 
    
    this.props.fetchVideos();
  }
  onDelete() {
    
    this.props._deleteVideo(this.props.video._id)
    this.setState({ confirm: !this.state.confirm }) 
    
    
   
}
 

  
  }
  onDelete(id) {
    alert("Video deleted ");
    this.props._deleteVideo(id)
   
    
    this.props.fetchVideos();
   
}
  closeModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 
  render() {
    const { videos,video } = this.props;
    
    
    console.log('nkati4ume2',videos);
    console.log('4ume2',video);
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
      Header: 'video',
      Cell: (row) => {
        return <div>
          <ReactPlayer
         url={row.original.video}
           className='div '
           width='10'
           height='10'
           alt={"not suppoted"}
         />
          
        </div>
      },
      //id: "picture"
    },
    {
      Header: 'Date posted',
      accessor: "createdAt",
    }, {
      Header: 'Action',
      maxWidth: 70,
      Cell: row => (
        <div>
          <span onClick={this.onDelete.bind(this, row.original._id)}><FontAwesome.FaTrash /></span>
          <span onClick={this.onHandleEdit.bind(this, row.original._id)}><FontAwesome.FaEdit /></span>
        </div>
      )
    }]
    return (
      <div>
        <PanelHeader size="sm" />
        <AddVideo open={this.state.add} close={this.toggleAdd} />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <Navbar color="dark" light expand="md">
                    <Nav navbar>
                      <NavItem>
                        <NavLink onClick={this.toggleAdd}><i className="now-ui-icons ui-1_simple-add"></i> Video</NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    defaultPageSize={5}
                    className="-striped -highlight"
                    data={videos}
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
          <ModalHeader> Editing video information </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="select">Select Category</Label>
              <Input type="select" onChange={(e) => { this.setState({ select: e.target.value }) }} name="select" id="select">
                {this.props.category ? (
                  this.props.category.map((data, index) => (
                    <option key={index} value={data._id}>{data.name}</option>
                  ))
                ) : null}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="video">Video</Label>
              <Input type="text" onChange={(e) => { this.setState({ title: e.target.value }) }} name="video" id="video" />
            </FormGroup>

            <FormGroup>
              <Label for="text">Text Area</Label>
              <Input type="textarea" onChange={(e) => { this.setState({ body: e.target.value }) }} name="textarea" id="textarea" />
            </FormGroup>

            <FormGroup>
              <Label for="File">File</Label>
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
                              { this.props.video ? 
                                  this.props.video.title : 
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
    videos: state.videos,
    video: state.video,
    category:state.category,
    respond: state.videos.respond,
    delVideo:state.delVideo
    

  }
}
export default connect(matchDatesToProps, actions)(Videos);
