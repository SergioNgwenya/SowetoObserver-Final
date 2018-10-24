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
import * as FontAwesome from 'react-icons/lib/fa';
import AddVideo from './AddVideo';
import ReactPlayer from 'react-player';

class Videos extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      article: false,
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
  
  toggleAdd() {
    this.setState({ add: !this.state.add });
  }
  //Handling the action buttons 
  onHandleEdit(id) {
    alert("Edit record " + id);
  }
  onHandleDelete(id) {
    alert("Delete record number " + id);
  }

  closeModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 
  render() {
    const { videos } = this.props;
    console.log(videos)
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
           className='react-player'
           width='auto'
           height='40'
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
          <span onClick={this.onHandleDelete.bind(this, row.original._id)}><FontAwesome.FaTrash /></span>
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
      </div>
    );
  }
}

function matchDatesToProps(state) {
  return {
    videos: state.videos,
    video: state.video,
    category:state.category
  }
}
export default connect(matchDatesToProps, actions)(Videos);
