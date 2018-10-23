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
  componentDidMount() {
  }

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
    const { video } = this.props;
    console.log(video)
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
    }, {
      Header: 'Category',
      Cell: row => (<div>{row.original.category.name}</div>)
    }, {
      Header: "Status",
      accessor: "status",
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
                    data={video}
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
    videos: state.videos
  }
}
export default connect(matchDatesToProps, actions)(Videos);
// import React from 'react';
// import ReactTable from "react-table";
// //import {Link} from 'react-router-dom';
// import 'react-table/react-table.css'
// import {Row, Col,Card, CardHeader, CardBody} from 'reactstrap';
// import { PanelHeader } from '../../../components';
// import * as actions from '../../../actions';
// import {connect} from 'react-redux';
// //Loading spinner
// //IMporting all icons from fontAwesome
// import * as FontAwesome from 'react-icons/lib/fa'

// //Style for loader
// const style = {
//   paddingLeft: "50%"
// }
// //Style for buttons 
// const styleButton = {
//   button: {
//   borderColor: "#f96233",
//   backgroundColor: "#ffffff",
//   color: "#f96233",
//   cursor: "pointer",
//   borderWidth: ".9px",
//   borderRadius: "30px",
//   padding: "7px 25px",
//   margin: "8px"
//   },
// }
// //style for icons
// const styleIcons = {
//   button: {
//   borderColor: "rgba(0,0,0,0.03)",
//   backgroundColor: "rgba(0,0,0,0.03)",
//   color: "#0d0e0f",
//   cursor: "pointer",
//   borderWidth: ".1px",
//   borderRadius: "50px",
//   margin: "2px",
//   position: "center",
//   decoration:"none",
//   },
// }
// class Articles extends React.Component{
//       constructor(){
//         super();
//         this.state={
//           data: [],
//           article: false,
//           category:false,
//           author:false,
//           isOpen:false,
//         }
//     }
//     //Components
//     componentDidMount(){
//       // this.props.fetchCategory();
//       this.props.fetchArticles();
     
//     }

//      //Handling the action buttons 
//      onHandleEdit(id) {
//       // alert("Edit record " + id);
//       this.setState({ isOpen: true })
//     }
//     onHandleDelete(id) {
//       alert("the id got is" + id);
//     }

//     render(){
//       const data = [
//         {
//         Number: '1',
//         Name: 'Youth day 2018',
//         Video: 'youth.mp4',
//         Summary:'Video took on june 16 2018 , by the streets of soweto ',
//         Date: 'Jul 17th 2018', 
//       }]

//       const columns = [{
//         Header: '#',
//         accessor: 'Number', // String-based value accessors!
//         maxWidth:50,
//       }, {
//         Header: 'Name',
//         accessor: 'Name',
//         maxWidth: 150,
//       },{
//         Header:'Video',
//         //accessor:'Video',
//         Cell: (row) => {
//           return <div><video height={34} src={row.original.ImgPath} alt={"not suppoted"}/></div>
//         },
//         id: "picture"

//       },
//       {
//         Header: 'Summary',
//         accessor:'Summary',
//       },{
//         Header: 'Date Posted',
//         accessor: 'Date',
//         maxWidth: 150
//       },{
//           Header: 'Action',
//           maxWidth:70,
//           Cell: row => (
//             <div>
//               <button style={styleIcons.button} onClick={this.onHandleDelete.bind(this,row.original._id)}><FontAwesome.FaTrash /></button>
//               <button style={styleIcons.button} onClick={this.onHandleEdit.bind(this,row.original._id)}><FontAwesome.FaEdit /></button>
//             </div>
//           )
//          }]

//         return (
//           <div>
//             <PanelHeader size="sm" />
//             <div className="content">
//               <Row>
//                 <Col xs={12}>
//                   <Card>
//                     <CardHeader>
//                       <Row>
//                           <Col xs="6"><h4>Videos online  </h4></Col>
//                        </Row>
//                             <button style={styleButton.button} onClick={() => {
//                             this.props.history.push("/admin/videos/addvideos");
//                             }} round simple>Add</button>
//                       </CardHeader>
//                     <hr />

//                     <CardBody>
//                         <ReactTable
//                               className="-striped -highlight"
//                               defaultPageSize={5}
//                               data={data}
//                               columns={columns}
//                               />
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
  
//             </div> 
//         </div>
//         );
//     }
// }

// function matchDatesToProps(state)
// {
//   return{
//     articles: state.articles
//   }
// }
// export default connect(matchDatesToProps,actions)(Articles);